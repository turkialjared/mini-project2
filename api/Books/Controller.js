const Books = require("../../model/Books");

module.exports.AllBooks = async (req, res, next) => {
  try {
    const books = await Books.find();
    if (!books) {
      return res.status(404).json("There is no books");
    }
    return res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};
module.exports.GetOneBook = async (req, res, next) => {
  try {
    return res.json(req.book);
  } catch (error) {
    next(error);
  }
};
module.exports.UpdateOneBook = async (req, res, next) => {
  try {
    const updateBook = await Books.updateOne(req.body);
    return res.status(201).json(updateBook);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports.DeleteOneBook = async (req, res, next) => {
  try {
    const deletebook = await Books.deleteOne(req.book);
    return res.status(201).json(deletebook);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports.AddNewBook = async (req, res, next) => {
  try {
    const NewBook = await Books.create(req.body);
    return res.status(201).json(NewBook);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
