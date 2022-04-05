const mongoose = require('mongoose');
const path = require('path');
const UserModel = require('../models/userModel');


// Here we are going to add all handlers !
const getUser = (req,res)=>{
    res.sendFile('views/user.html', { root: "." })
}

const addUser = async(req,res)=>{
    // Adding product data !
    const userData = req.body;
    console.log(userData);

    // using try-catch block
    try {
        const addResult = await UserModel.create(userData);
        console.log(addResult);
        res.send(`<h1 style = "text-align: center;"> Your Data Has been Added Succesfully !</h1>
        <a href="/user">Click here to go on home page</a>`)
    } catch (error) {
        res.status(500).json({
            errorObj:error
        })
    }
}


module.exports = {
    getUser,addUser
}