var express = require('express');
var logger = require('morgan');
const mongoose = require('mongoose')
const Asset = require('./models/assetModel.js')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })


const DBConnection = async () => {
  const connection = await mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true
  })
  console.log('Connected to Database')
}

DBConnection()
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async function (req, res, next) {
  let asset = await Asset.findById('62758168d6e19c107417606c')

  res.status(200).json({
    message: 'success',
    data: asset
  })
});



module.exports = app;
