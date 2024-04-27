const mongoose = require("mongoose")

const empSchema = new mongoose.Schema({
    name: String,
    email: String,
    empId: Number
})

module.exports = mongoose.model('Employee', empSchema)