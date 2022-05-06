var express = require('express');
var logger = require('morgan');
const mongoose = require('mongoose')
const Asset = require('./models/assetModel.js')

const DBConnection = async () => {
  const connection = await mongoose.connect("mongodb://assettrackerappdb:Io670STskFkM1FqypzUPoLNKpEhT27qw8nH7Tg6BNwLvufzK3uUsdQMaLuu5S2KlAbjuSoiK8QCW7j6rQMTgYA==@assettrackerappdb.mongo.cosmos.azure.com:10255/asset-tracker?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@assettrackerappdb@", {
    useNewUrlParser: true
  })
  console.log(connection, 'Connected to Database')
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
