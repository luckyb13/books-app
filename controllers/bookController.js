const Book = require("../models/book");

exports.book_list = async (req, res) => {
  const books = await Book.find();

  res.render("index", {
    title: "Library App",
    books
  });
};

exports.book_create_post = async (req, res) => {

  await Book.create({
    title: req.body.title,
    author: req.body.author
  });

  res.redirect("/");
};

exports.book_delete_post = async (req, res) => {

  await Book.findByIdAndDelete(req.params.id);

  res.redirect("/");
};