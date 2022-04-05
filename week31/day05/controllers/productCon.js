const mongoose = require('mongoose');
const path = require('path');
const ProductModel = require('../models/productModel');

// Here we are going to add all handlers !


const getProduct = (req,res)=>{
    res.sendFile('views/product.html', { root: "." })
}

const addProduct =  async(req,res)=>{
    // Adding product data !
    const productData = req.body;
    console.log(productData);

    // using try-catch block
    try {
        const addResult = await ProductModel.create(productData);
        console.log(addResult);
        res.send(`<h1 style = "text-align: center;"> Your Data Has been Added Succesfully !</h1>
        <a href="/product">Click here to go on home page</a>`)
    } catch (error) {
        res.status(500).json({
            errorObj:error
        })
    }
}


module.exports = {
    getProduct,addProduct
}