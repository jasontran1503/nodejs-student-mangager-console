const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const indexRouter = require('./routes/index');
const studentRouter = require('./routes/students');

const rootDir = require('./util/path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(indexRouter);
app.use(studentRouter);

app.listen(port, () => {
  console.log('App running on port: ' + port);
});
