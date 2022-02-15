const express = require('express')
const app = express()

const DB = require('./Connection')
const rotasProdutos = require("./Routes/Routes")
const rotasUsuario = require('./Routes/Route-Usuario')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use("/api", rotasProdutos)
app.use("/usuarios", rotasUsuario)

app.get("/", (req, res) => {
    res.send("Olá")
})
app.listen(5000, () => console.log("Servidor rodando na porta 5000"))