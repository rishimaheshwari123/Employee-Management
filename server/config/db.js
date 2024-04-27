const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/Employee-crud');
        console.log('Connection successfully')
    } catch (error) {
        console.log("connection failed!")
    }
}

module.exports = connectDB;