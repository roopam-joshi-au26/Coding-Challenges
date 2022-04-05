const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    ProductName:{
        type:String,
        required:true
    },
    ProductPrice:{
        type:String,
        required:true
    }
})


// Creating mongoose model out of SurveySchema !
const ProductModel = mongoose.model('product',productSchema);

// exporting ProductModel !
module.exports = ProductModel;