const express = require('express');
const router = express.Router();



// Importing all the handlers from the controller file !
const {getUser , addUser} =require('../controllers/userCon');


router.get('/',getUser);
router.post('/',addUser);


// Exporting Router !
module.exports = router ; 


