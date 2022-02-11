const  express = require('express');
const randomcolor= require('randomcolor');
const random_joke = require("everyday-fun");
 
const app = express();
const PORT = 8000 || process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server started at Port No:${PORT}`)
})

app.get('/random',(req,res)=>{
    
    let color = randomcolor({
        format: 'rgb'
     });
    console.log(color)
    res.send(`<body style='background-color: ${color}'>
    <h1 style='text-align:center'>${color}</h1>
    </body>`)
})
app.get('/currentdate',(req,res)=>{
    res.send(`<h1 style='text-align:center'>${Date()}</h1>`)
})

app.get('/quote',(req,res)=>{
    const joke=random_joke.getRandomQuote();
    let color = randomcolor({
        format: 'rgb'
     });
    res.send(`<body style='background-color: ${color}'>
    <h1 style='text-align:center'>${joke.quote}</h1>
    </body>`)

})
app.get('/joke',(req,res)=>{
    const joke=random_joke.getRandomJoke();
    let color = randomcolor({
        format: 'rgb'
     });
    res.send(`<body style='background-color: ${color}'>
    <h1 style='text-align:center'>${joke.body}</h1>
    </body>`)

})
app.get('/riddle',(req,res)=>{
    const joke=random_joke.getRandomRiddle();
    let color = randomcolor({
        format: 'rgb'
     });
    res.send(`<body style='background-color: ${color}'>
    <h1 style='text-align:center'>${joke.riddle}</h1>
    </body>`)

})
app.get('*',(req,res)=>{
    res.send("404 NOT FOUND")
})