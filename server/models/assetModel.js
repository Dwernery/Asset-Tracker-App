const mongoose = require('mongoose')

const assetSchema = new mongoose.Schema({
    name: {
        type: String, required: [true, 'An asset must have a name']
    },
    type: {
        type: String, required: [true, 'An asset must have a type']
    },
    values: [
        {
            amount: Number,
            month: String,
            year: String
        }
    ],
})
const Asset = mongoose.model('Asset', assetSchema)

module.exports = Asset