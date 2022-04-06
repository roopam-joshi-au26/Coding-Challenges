const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(() =>{ 
    console.log(`connection successfull`);
}).catch((e)=>{
    console.log("no connection");
});