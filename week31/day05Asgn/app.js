const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
require('dotenv').config();

var json = require('./mock/data.json');

app.use(express.json())


const dbUrl = process.env.MONGO_URL;

const client = new MongoClient(dbUrl);

let userDocCollection = null;

async function initDB() {
    // connecting to database 
    await client.connect((errr) => {
        if (errr) {
            console.log("Failed to connect to db");
        } else {
            console.log("connected to database");
        }
    });

    // adding db name 
    const db = client.db('userDoc');

    // adding collection name
    userDocCollection = db.collection('user_document')
}
// calling this initDB function to connect db !
initDB();


app.use(express.urlencoded({ extended: true }))

app.get('/data', async (req, res) => {
    await userDocCollection.insertMany(json, function (err, result) {
        if (err) {
            console.log("error");
        } else {
            res.send(result)
        }
    });
})


app.post('/data', async (req, res) => {
    const { userId, id, title, body } = req.body
    const addResult = await userDocCollection.insertOne(req.body)
    res.send(addResult)
})

app.put('/data/:userId', async (req, res) => {
    const userData = req.body
    console.log(userData);
    const userId = req.params;
    console.log(userId);
    try {
        const updateResult = await userDocCollection.updateMany({"userId":userId},{ $set:{userData}})
        res.send(updateResult)
    } catch (error) {
        res.status(500).json({
            errorObj:"this is error"
        })
    }
    
})

app.delete('/data/:userId', async (req, res) => {
    const userId = req.params;
    console.log(userId);
    try {
        const deleteResult = await userDocCollection.deleteMany({"userId":2})
        res.send(deleteResult)
    } catch (error) {
        res.status(500).json({
            errorObj:"this is error"
        })
    }
    
})



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('server running...'))