const express = require('express');
const books = require('./books.json');
var uuid = require('uuid');
const fs = require('fs');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3003;

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


app.get('/book', (req, res) => {
    res.sendFile(__dirname + '/books.json')
})

app.get('/book/:id', (req, res) => {
    const id = req.params.id;
    books.forEach(element => {
        if (element.id == id) {
            res.send(element)
        }
    });
    res.status(200).send('no data found, please give correct id ')
})


app.post('/book', (req, res) => {
    const { name, year, author } = req.body
    const data = {
        id: uuid.v4(),
        name: name,
        year: year,
        author: author
    }
    books.push(data);
    fs.writeFile('books.json', JSON.stringify(books), () => {});
    res.send('data aded');
})

app.put('/book/:id', (req, res) => {
    const { name, year, author } = req.body
    id = req.params.id;
    books.forEach(element => {
        if (element.id == id) {
            element.name = name;
            element.year = year;
            element.author = author;
            console.log(element)
        }
    });
    fs.writeFile('books.json', JSON.stringify(books), () => {});
    res.send(`${id} updated`)
});

app.delete('/book/:id', (req, res) => {
    const id = req.params.id;
    const filterData = []
    books.forEach(element => {
        if (element.id != id) {
            filterData.push(element)
        }
    });
    fs.writeFile('books.json', JSON.stringify(filterData), () => {})
    res.send(`${id} is removed`);
})

app.listen(PORT, () => console.log('server is up at port', PORT))