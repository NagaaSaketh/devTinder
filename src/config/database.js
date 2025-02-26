const mongoose = require("mongoose");

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://saketh:1a1TYM5fIAjfDHp0@cluster0.uq2an.mongodb.net/DevTinder");
}

module.exports = connectDB;





