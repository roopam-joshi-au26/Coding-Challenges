const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})


// Creating mongoose model out of SurveySchema !
const UserModel = mongoose.model('user',userSchema);

// exporting ProductModel !
module.exports = UserModel;