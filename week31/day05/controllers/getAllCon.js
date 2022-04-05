const mongoose = require('mongoose');
const path = require('path');
const ProductModel = require('../models/productModel');
const UserModel = require('../models/userModel');


const getAll = async (req,res)=>{
    try {
        const findProductResult = await ProductModel.find({});
        const findUserResult = await UserModel.find({});
        // 1st way-->
        // res.send(`<h2>ProductData : -${findProductResult}</h2> <br/> <h2>UserData:- ${findUserResult}</h2>`);
        // 2nd way-->
        return res.status(200).json({data:{
            "USERS":findUserResult,
            "PRODUCTS":findProductResult
         }})
    } catch (error) {
        res.status(500).json({
            errObj: error
        })
    }
}


module.exports = {
    getAll
}