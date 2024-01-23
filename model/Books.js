const { model, Schema } = require("mongoose");

const BooksSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, default: 5 },
  image: { type: String, default: "cat.jpeg" },
  author: { type: String, required: true },
});

module.exports = model("Books", BooksSchema);
