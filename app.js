const express = require("express");

const app = express();

const path = require("path");

const indexRouter = require("./routes/index");

const studentRouter = require("./routes/students");

const rootDir = require("./util/path");

const port = 3200;

app.set("view engine", "ejs");

app.set("views", "views");

app.use(express.urlencoded({ extended: false }));

app.use(indexRouter);

app.use(studentRouter);

app.listen(port, () => {
  console.log("App running on port: " + port);
});
