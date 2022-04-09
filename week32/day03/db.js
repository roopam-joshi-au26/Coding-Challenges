const mongoose = require('mongoose');
MONGO_URL = process.env.MONGO_URL

async function initMongo() {
    await mongoose.connect(MONGO_URL,(err)=>{
        if(err){
            console.log("Error Connecting To The Database !!");
        }
        else{
            console.log("Connecting To Database Succesfully !");
        }
    })
}

module.exports = {initMongo};