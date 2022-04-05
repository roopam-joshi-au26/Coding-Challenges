const express = require('express');
const router = express.Router();


const {getAll} = require('../controllers/getAllCon');

router.get('/',getAll);


module.exports = router ; 