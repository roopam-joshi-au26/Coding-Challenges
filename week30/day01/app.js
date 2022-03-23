const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require ('cookie-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(session({
    secret: 'sdswewewewsddsds',
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false,
    saveUninitialized: true,
}))

// lets assume we are getting the data from db !
const dbUsername = 'asd@gmail.com';
const dbPassword = '123'

var userData =[]

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/profile', (req, res) => {
    console.log(req.cookies) 
    if(req.cookies){
        res.send(userData)
    }else{
        res.send("Invalid User !")
    }
    
})

app.get('/logout', (req, res) => {
    // here we are deleting cookies instantly !!
    res.clearCookie('connect.sid');

    // here session will destroyed and cookie will be cleared only when the maxAge expires!
    // req.session.destroy();
    res.send(`<h1 style="text-align : center">You are logged out !</h1>`)
    
})

app.post('/login', (req, res) => {
    const { username, password } = req.body
    let user = {username}
    console.log(username, password);
    userData.push(user)

    if (username === dbUsername && password === dbPassword) {
        // write data to my session !
        console.log(req.session);
        req.session.userId = username;
        req.session.isLoggedIn = true;
        console.log(req.session);
        res.send("logged in successfully !")
    } else {
        res.send('Invalid Username or Password !')
    }
});





app.listen(3000, () => console.log('server running...'))