const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, require: true },
    authors: { type: String, require: true },
    publishedDate: {type: String, require: true },
    image: {type: String, require: true},
    bookLink: {type: String, require: true}
    // synopsis: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;