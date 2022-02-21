const express = require('express')
const dotenv = require('dotenv')
const rotasProdutos = require("./Routes/Routes")
const rotasUsuario = require('./Routes/Route-Usuario')

dotenv.config()

const app = express()

const DB = require('./Connection')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use("/api", rotasProdutos)
app.use("/usuarios", rotasUsuario)

app.get("/", (req, res) => {
    res.send("<h1 style='color: red;'>Olá<h1>")
})
app.listen(5000, () => console.log("Servidor rodando na porta 5000"))