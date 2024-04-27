const mongoose = require("mongoose")

const authSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

module.exports = mongoose.model('Auth', authSchema)