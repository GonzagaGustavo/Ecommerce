const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const shema = mongoose.Schema

const eshemausuarios = new shema({
    id: Number,
    name: String,
    email: String,
    idade: String,
    senha: String
})

const ModeloUsuarios = mongoose.model('usuarios', eshemausuarios)

router.post('/criaruser', (req, res) => {
    const novoUser = new ModeloUsuarios({
        name: req.body.name,
        email: req.body.email,
        idade: req.body.idade,
        senha: req.body.senha
    })
    novoUser.save(function(err) {
        if(!err) {
            res.send("Usuario criado!")
        } else {
            res.send(err)
        }
    })
})

module.exports = router