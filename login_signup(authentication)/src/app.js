require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const auth = require('./middleware/auth');


require("./db/conn");

const Register = require('./models/signup')

const port = process.env.PORT || 3000;


const static_path = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.use(express.static(static_path))
app.set("view engine","hbs")
app.set("views",template_path);
hbs.registerPartials(partials_path)

app.get('/', (req, res) => {
    res.render("index");
})

app.get('/secret',auth ,(req, res) => {
    res.render("secret");
    // console.log(`${req.cookies.jwt}`);
})

app.get("/signup",(req, res) => {
    res.render("signup")
});

app.get("/login",(req, res) => {
    res.render("login")
});

//create a new user in our database
app.post("/signup",async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        
        if(password === cpassword) {
            const registerUser = new Register({ //get the data from user
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                gender:req.body.gender,
                phone:req.body.phone,
                age:req.body.age,
                password:password,
                confirmpassword:cpassword
            })
            console.log("success part"+ registerUser);

            //middleware to generate token              
            const token = await registerUser.generateAuthToken();
            console.log("token is:"+ token);

            res.cookie("jwt",token,{ expires : new Date(date.now()+30000),httpOnly:true}); 
            

            const registered = await registerUser.save()//saving data into database
            console.log(registered)
            res.status(201).render("index")

        }else{
            res.send("password are not matching")//if password is not match
        }
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
});

//login check 
app.post('/login',async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Register.findOne({ email: email});

        const isMatch = await bcrypt.compare(password, useremail.password);
        
        const token = await useremail.generateAuthToken();//generating token after user login
        console.log("token is:"+ token);
        res.cookie("jwt",token,{ expires : new Date(date.now()+30000),httpOnly:true}); 
        

        if(isMatch){
            res.status(201).render("index")
        }else{
            res.send("Invalid login Details");
        }
    } catch (error) {
        res.status(400).send("Invalid login Details");
    }
})

app.listen(port,()=>{
    console.log("listening on port")
})