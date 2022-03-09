// importing Fs module
const fs = require('fs');

// Importing Express
const express = require("express")

// Creating a Server with express
const app = express()

let visitCount = 0
let PORT = 8080

app.get('/', (req, res) => {
    visitCount += 1
    res.json({Times:visitCount})
    // res.send(`<h1>Times Visited : ${visitCount}</h1>`)
    fs.writeFile("count.txt",`Times Visited : ${visitCount}`,(err)=>{
        console.log("count done")
    })
})

app.get('/reset', (req, res) => {
    visitCount = 0
    res.send(`<h1>Reset Successful</h1>`)
    fs.writeFile("count.txt",`Times Visited : ${visitCount}`,(err)=>{
        console.log("count done")
    })
})

app.listen(PORT)