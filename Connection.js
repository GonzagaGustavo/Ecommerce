const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO)

const objdb = mongoose.connection

objdb.on('connected', () => console.log("Conectado"))
objdb.on('error', () => console.log("Ocorreu um erro"))

module.exports = mongoose