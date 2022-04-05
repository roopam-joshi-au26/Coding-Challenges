const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();


// Connection to DB !
const {initMongo} = require('./db');
initMongo();


// All Routers !
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
const getAllRouter = require('./routes/getAll');



// Middlewares !
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/product', productRouter);
app.use('/user',userRouter);
app.use('/',getAllRouter);


// server listening on port !
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log('Server chalu ho gaya !'))