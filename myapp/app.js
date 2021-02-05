var express = require('express');
const { Unauthorized } = require('http-errors');
var users = require('./routes/users');
var cors = require("cors");


var app = express();
app.use(cors());
app.use('/users', users);

// module.exports = app;

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})
