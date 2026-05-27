const mongoose = require("mongoose"); 

const BookSchema = new mongoose.Schema({
    isbn: String, 
    title: String, 
    author: String,
    publishedDate: String,
    pages: Number,
});

module.exports = mongoose.model("Book", BookSchema);