const express = require('express')
const router = express.Router();

// we are importing all the handlers from the controllers file !
const { getfavSurvey, addfavSurvey, getAllfavSurvey} = require('../controllers/surveyCon');


// here we are mentioning our all http methods along with handlers which we have imported from controllers !
router.get('/', getfavSurvey);
router.get('/Results', getAllfavSurvey);
router.post('/', addfavSurvey);


// here we are exporting this router !
module.exports = router;