var express = require('express');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res, next) {
  res.status(200).json({
    message: 'success',
    data: 'test api data'
  })
});

module.exports = app;
