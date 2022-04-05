const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

// connection to DB !
const { initMongo } = require('./db');
initMongo();


// ALL Routers !
const surveyRouter = require('./routes/survey');

// Middlewares !
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/favouriteSurvey', surveyRouter);

// server listening on port !
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log('Server chalu ho gaya !'))