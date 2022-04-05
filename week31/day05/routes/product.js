const express = require('express');
const router = express.Router();


// Importing all the handlers from the controller file !
const {getProduct , addProduct} =require('../controllers/productCon');


// here we are mentioning our all http methods along with handlers which we have imported from controllers !

router.get('/',getProduct);
router.post('/',addProduct);


// Exporting Router !
module.exports = router ; 