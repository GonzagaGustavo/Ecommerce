const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/Ecomerce")

const objdb = mongoose.connection

objdb.on('connected', () => console.log("Conectado"))
objdb.on('error', () => console.log("Ocorreu um erro"))

module.exports = mongoose