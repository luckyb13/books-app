const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const indexRouter = require("./routes/index");
global.crypto = require("crypto");
const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(process.env.PORT || 80, () => {
  console.log("Server running");
});