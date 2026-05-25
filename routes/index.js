const express = require("express");

const router = express.Router();

const bookController = require("../controllers/bookController");

router.get("/", bookController.book_list);

router.post("/add-book", bookController.book_create_post);

router.post("/delete/:id", bookController.book_delete_post);

module.exports = router;