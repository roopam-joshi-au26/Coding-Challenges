// DB Connection !
const mongoose = require('mongoose');

DB_URL = process.env.MONGO_URL;


async function initMongo() {
    await mongoose.connect(DB_URL, (err) => {
        if (err) {
            console.log("Error connecting to DB");
        }
        else {
            console.log("Connected to DB !");
        }
    })
}

// Exporting the initMongo function !
module.exports = {
    initMongo
}