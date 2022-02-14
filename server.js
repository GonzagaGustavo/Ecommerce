const express = require('express')
const app = express()

const DB = require('./Connection')
const rotasProdutos = require("./Routes/Routes")

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use("/api", rotasProdutos)

app.get("/", (req, res) => {
    res.send("Olá")
})
app.listen(5000, () => console.log("Servidor rodando na porta 5000"))