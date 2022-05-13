var express = require('express');
var logger = require('morgan');
const mongoose = require('mongoose')
const Asset = require('./models/assetModel.js')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })


const DBConnection = async () => {
  await mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true
  })
  console.log('Connected to Database')
}

DBConnection()
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res, next) {
  res.status(200).json({
    message: 'Home Page',
  })
});

app.get('/asset/:id', async function (req, res, next) {
  let asset = await Asset.findById(req.params.id)
  res.status(200).json({
    message: 'Success',
    result: asset
  })
});

app.post('/asset', async function (req, res, next) {
  let newAsset = await Asset.create({
    name: req.body.name,
    type: req.body.type,
    values: req.body.values
  })
  res.status(200).json({
    message: 'Success',
    result: newAsset
  })
})

//Will need the UPDATE asset route//


module.exports = app;
