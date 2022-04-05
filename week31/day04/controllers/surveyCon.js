const mongoose = require('mongoose');
const path = require('path');
const SurveyModel = require('../models/surveymod');

// Here we are going to add all handlers !

const getfavSurvey = (req, res) => {
    res.sendFile('views/index.html', { root: "." })
}


const getAllfavSurvey = async (req, res) => {

    // Getting All survey results !
    try {
        const findResult = await SurveyModel.find({});
        res.send(findResult)
    } catch (error) {
        res.status(500).json({
            errObj: error
        })
    }
}

const addfavSurvey = async (req, res) => {
    // Adding Survey !
    const surveyData = req.body
    console.log(surveyData);

    // always put all the db CRUD operations in try-catch block !
    try {
        const addResult = await SurveyModel.create(surveyData);
        console.log(addResult);
        res.send(`<h1 style = "text-align: center;"> Your Data Has been Added Succesfully !</h1>
        <a href="/favouriteSurvey">Click here to go on home page</a>`)

    } catch (error) {
        res.status(500).json({
            errObj: error
        })
    }
}

// Exporting All Handlers !
module.exports = { getfavSurvey, getAllfavSurvey, addfavSurvey };