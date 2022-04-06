const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

})

module.exports = mongoose.model('car', carSchema)