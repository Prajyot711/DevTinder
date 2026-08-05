const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://prajyotchavan17_db_user:LjTYDohscjfq0nyk@namastenode.ijplvnz.mongodb.net/devTinder")
}

module.exports = connectDB