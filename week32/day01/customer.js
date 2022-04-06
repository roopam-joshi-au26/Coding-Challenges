const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cars: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cars'
    }]
})

module.exports = mongoose.model('customer', customerSchema)