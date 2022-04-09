const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
require('dotenv').config();
const MovieModel = require('./models/movieMod');

// Connection to db !
const { initMongo } = require('./db');
initMongo();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get routes !
app.get('/movies/NOTRATED', async (req, res) => {
    try {
        const movieData = await MovieModel.aggregate([
            {
                $match: {
                    year: 2000,
                    rated: "NOT RATED"
                }
            },
            {
                $sort:{
                    title:1
                }
            },
            {
                $project:{
                    year:1,
                    rated:1,
                    title:1
                }
            }
        ])
        // console.log(movieData);
        res.status(200).json(movieData);
    } catch (error) {
        console.log(error);

    }
})


app.get('/movies/IMDB', async (req, res) => {
    try {
        const movieData = await MovieModel.aggregate([
            {
                $match: {
                    year: 2000,
                    genres: ["Comedy"],
                    "imdb.rating": { $eq: 7 }
                }

            },
            {
                $sort: {
                    title: 1
                }
            },
            {
                $project: {
                    title: 1,
                    year: 1,
                    genres: 1,
                    "imdb.rating": 1
                }
            }
        ])
        // console.log(movieData);
        res.status(200).json({ movieData });
    } catch (error) {
        console.log(error);

    }
})

app.listen(PORT, () => console.log('server running...'))