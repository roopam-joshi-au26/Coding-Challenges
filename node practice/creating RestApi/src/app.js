const  express = require('express');
require('./db/conn');
const Student = require('./models/students');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());//to get incoming req object as json obj

//create a new students using promise
// app.post('/students', (req, res)=>{
//     const user = new Student(req.body);//taking the data from postman
//     user.save().then(()=>{ //save it to database
//         res.status(201).send(user); //showing the data in browser
//     }).catch(err => {
//         res.status(400).send(err);//showing the error message
//     })
// })

//create a new student using async/await
app.post('/students', async (req, res)=>{
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
        
    } catch (error) {
        res.status(400).send(error);
    }
})


app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})