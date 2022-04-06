const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const Car = require('./models/car');
const Customer = require('./models/customer');
const app = express();
const PORT = 3000

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


function dbinit() {
    mongoose.connect(process.env.MONGODB_URL)
}

dbinit()


app.get('/', async(req, res) => {
    const allData = await Customer.find({})
    res.status(200).json(allData)
})

app.post('/addcustomer', async(req, res) => {
    const customerData = req.body
    try {
        const result = await Customer.create(customerData)
        res.status(201).send(result)
    } catch (error) {
        console.log(error)
    }
})

app.post('/addcar/:customerId', async(req, res) => {
    try {
        const customerId = req.params
        console.log(customerId)
        const carData = req.body
        const newCar = await Car.create(carData)
        const result = await Customer.findOneAndUpdate(customerId, { $push: { cars: newCar._id } })
        res.status(201).send(result)
    } catch (error) {
        console.log(error)
    }
})

app.get('/cars', async(req, res) => {
    try {
        const carData = await Car.find({})
        res.status(200).json(carData)
    } catch (error) {

    }
})

app.listen(PORT, () => console.log(`server is up at port`), PORT)