const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils");
const Jwt = require("jsonwebtoken");
const expressAsyncHandler = require("express-async-handler");

const routerUser = express.Router();

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    idade: { type: Number, required: true },
    senha: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);

routerUser.post("/criaruser", (req, res) => {
  const novousuario = new User({
    name: req.body.name,
    email: req.body.email,
    idade: req.body.idade,
    senha: bcrypt.hashSync(req.body.senha, 8),
    isAdmin: false,
  });
  novousuario.save(function (err) {
    if (!err) {
      res.send("Usuario criado!");
    } else {
      res.send(err);
    }
  });
});
routerUser.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.senha, user.senha)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return
      }
    }
    res.send("err")
  })
);

module.exports = routerUser;
