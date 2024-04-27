const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        mongoose.connect('mongodb+srv://rishi:rishi@cluster0.ck8vxxf.mongodb.net/Employee-crud');
        console.log('Connection successfully')
    } catch (error) {
        console.log("connection failed!")
    }
}

module.exports = connectDB;