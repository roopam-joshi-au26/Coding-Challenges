const mongoose = require('mongoose');
const validator = require('validator');

//defining schema
const studentSchema = new mongoose.Schema({
    name : {
        type : 'string',
        required : true ,
        minlength : 3
    },
    email : {
        type : 'string', 
        required : true,
        unique : [true,"Email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email');
            }
        }
    },
    phone : { 
        type:Number,
        min:10,
        required:true,
        unique : [true,"Phone is already present"]
    },
    address : {
        type:String,
        required : true
    }
})

//we weill create a new collection 
const Student = new mongoose.model('Student',studentSchema);

module.exports = Student;