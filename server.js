const express = require('express')
const app = express()

const DB = require('./Connection')

app.get("/", (req, res) => {
    res.send("Olá")
})
app.listen(5000, () => console.log("Servidor rodando na porta 5000"))