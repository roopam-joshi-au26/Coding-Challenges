const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const PORT = 3000;

require('dotenv').config()

const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri);
var data;

async function run() {
    try {
        await client.connect();
        const database = client.db("sample_airbnb");
        const movies = database.collection("listingsAndReviews");
        var mysort = { price: 1 }
            // Query for a movie that has the title 'The Room'
        const query = { "address.country": "Spain", price: { $lte: 15.00 }, "review_scores.review_scores_rating": { $gte: 75 } };
        const options = {
            sort: { price: -1 }
        }
        data = await movies.findOne(query, options);

        // since this method returns the matched document, not a cursor, print it directly
    } finally {
        await client.close();
    }
}
run().catch(console.dir);


app.get('/', async(req, res) => {
    try {
        res.send(data)

        // const data = await sample_airbnb.listingsAndReviews.find({})



    } catch (error) {
        console.log(error)
    }

})

app.listen(PORT, () => console.log('server is up at port', PORT));