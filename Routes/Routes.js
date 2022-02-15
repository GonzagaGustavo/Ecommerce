const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const eschema = mongoose.Schema;

const eschemaproducts = new eschema({
  id: String,
  name: String,
  colecao: String,
  image: String,
  price: String,
  descricao: String,
  countInStock: String,
});

const ModeloProducts = mongoose.model("products", eschemaproducts);

router.post("/CriarProdutos", (req, res) => {
  const novoproduto = new ModeloProducts({
    name: req.body.name,
    colecao: req.body.colecao,
    image: req.body.image,
    price: req.body.price,
    descricao: req.body.descricao,
    countInStock: req.body.countInStock,
    id: req.body.id,
  });
  novoproduto.save(function (err) {
    if (!err) {
      res.send("Produto criado com sucesso");
    } else {
      res.send(err);
    }
  });
});
router.get("/pegarProdutos", (req, res) => {
  ModeloProducts.find({}, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});
router.post("/dataProducts", (req, res) => {
  ModeloProducts.find({ id: req.body.id }, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});
router.post("/edicao", (req, res) => {
  ModeloProducts.find({ id: req.body.id }, function (docs, err) {
    if (!err) {
      res.send(docs);
    } else {
      res.send(err);
    }
  });
});
router.post("/atualizaProduto", (req, res) => {
  ModeloProducts.findOneAndUpdate(
    { id: req.body.id },
    {
      name: req.body.name,
      colecao: req.body.colecao,
      image: req.body.image,
      price: req.body.price,
      descricao: req.body.descricao,
      countInStock: req.body.countInStock,
      id: req.body.id,
    },
    (err) => {
      if (!err) {
        res.send("Produto Editado");
      } else {
        res.send(err);
      }
    }
  );
});
router.post("/deleteProduto", (req, res) => {
    ModeloProducts.findOneAndDelete({id: req.body.id},(err) => {
        if (!err) {
            res.send("Produto excluido");
          } else {
            res.send(err);
          }
    })
})

module.exports = router;
