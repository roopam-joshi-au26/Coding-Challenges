const mongoose = require('mongoose');
const bcrypt  = require('bcryptjs');
const jwt = require('jsonwebtoken');
const res = require('express/lib/response');

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true,
        unique:true
    }, 
    gender:{
        type:String,
        required:true
    }, 
    phone:{
        type:Number,
        required:true,
        unique:true
    }, 
    age:{
        type:Number,
        required:true
    }, 
    password:{
        type:String,
        required:true
    }, 
    confirmpassword:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

//generating tokens
userSchema.methods.generateAuthToken = async function() {
    try {
        console.log(this._id)
        const token = jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        res.send("error part"+ error);
        console.log("the error is: " + error)
    }
}



//middleware after getting the data from user and before saving the data into database we convert password into hash
userSchema.pre("save",async function (next) {
    if(this.isModified("password")) {
        this.password = await bcrypt.hash(this.password,10);
        this.confirmpassword = await bcrypt.hash(this.password,10);
    }
    next();
})

//now we need to create collections 
const Register = new mongoose.model("Register",userSchema);

module.exports = Register;