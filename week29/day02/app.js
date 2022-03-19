const express = require('express');
const bodyParser = require('body-parser');
const datas = require('./data.json')
const fs = require('fs')
const app = express();
const PORT = 3000;


// get
app.get('/api/users', (req, res) => {
    res.sendFile(__dirname + '/data.json');
});

// get by id
app.get('/api/users/:id', (req, res) => {
    var data_filter = datas.filter((element) => element.id == req.params.id)
        // console.log(data_filter)
    res.send(data_filter);
})


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// post
app.post('/api/users', (req, res) => {
    let data = req.body
    console.log(data);
    datas.push(data);
    fs.writeFile('data.json', JSON.stringify(datas), () => {})
    res.status(201).send('Added')
});


// put method
app.put('/api/users/:id', (req, res) => {
    let id = req.params.id;
    let data = req.body;
    console.log(data)
    datas.forEach(element => {
        if (element.id == id) {
            element.userId = data.userId;
            element.title = data.title;
            element.body = data.body;
        }
    });
    fs.writeFile('data.json', JSON.stringify(datas), () => {})
    res.status(204).send('UPDATED')
});


// delete method
app.delete('/api/users/:id', (req, res) => {
    let id = req.params.id;
    var data_filter = datas.filter((element) => element.id != req.params.id);
    fs.writeFile('data.json', JSON.stringify(data_filter), () => {});
    res.status(204).send('Deleted')
})


app.listen(PORT, () => console.log('running at port', PORT));