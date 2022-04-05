const mongoose = require('mongoose');

// Creating Schema !
// name, email id, phone number, favorite color, favorite
// food, & feedback message.

const SurveySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        tyep:Number,
    },
    favouriteColor :{   
        type:String
    },
    favouriteFood:{
        type:String
    },
    feedback:{
        type:String
    }
})


// Creating mongoose model out of SurveySchema !
const SurveyModel = mongoose.model('survey',SurveySchema);

// exporting SurveyModel !
module.exports = SurveyModel
