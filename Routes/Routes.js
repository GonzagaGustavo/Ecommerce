const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaproducts = new eschema({
    id: String,
    name: String,
    colecao: String,
    image: String,
    price: String,
    descricao: String,
    countInStock: String
})

const ModeloProducts = mongoose.model("Products", eschemaproducts)
