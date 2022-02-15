// Importing Express
const express = require("express")

// Creating a Server with express
const app = express()

let visitCount = 0
let PORT = 8080

app.get('/', (req, res) => {
    visitCount += 1
    res.send(`<h1>Times Visited : ${visitCount}</h1>`)
})

app.get('/reset', (req, res) => {
    visitCount = 0
    res.send(`<h1>Reset Successful</h1>`)
})

app.listen(PORT)