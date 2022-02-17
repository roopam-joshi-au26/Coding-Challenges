const express = require('express');
const fs = require('fs');
const app = express();
let PORT = 3000;


app.get('/addNewData',(req, res) =>{
    fs.writeFile("read.txt","This is a new data",(err) => {
        console.log('files created')
    })
})

app.get('/updateNewData',(req, res) =>{
    fs.appendFile("read.txt","hello guys",(err) => {
        console.log('files updated')
    })
})

app.get('/displayData',(req, res) =>{
    fs.readFile("read.txt","utf-8",(err,data) => {
        res.send(data)
    })
})

app.listen(PORT);