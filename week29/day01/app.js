const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const ejs = require("ejs");
const app = express();
const PORT = 3000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.set('view engine', 'ejs');

var dogs = []

// home route
app.get('/', (req, res) => {
    res.render(__dirname + '/index.ejs')
});
app.post('/post', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const breed = req.body.breed;
    const height = req.body.height;
    const weight = req.body.weight;
    const owner = req.body.owner;
    let dog = { name, age, breed, height, weight, owner }
    dogs.push(dog)
    fs.appendFile('data/data.json', JSON.stringify(dog), () => {})
    res.render(__dirname + '/submited.ejs', { dogs: dogs })
})

app.listen(PORT, () => console.log("I am running at port", PORT));