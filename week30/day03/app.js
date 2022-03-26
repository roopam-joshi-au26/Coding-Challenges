const express = require('express');
const app = express();
const jsonwebtoken = require('jsonwebtoken');
const employee = require('./employee/employee1.json');
const fs = require('fs');
const bodyParser = require('body-parser');


app.use(express.json());
app.use(express.urlencoded({extended:true}))


var dbUsername = '123@g.com'
var dbPassword = '12345'

var SECRET = 'asdakjkwelll2kdks'

app.post('/employee', (req, res) => {
    let {username, password } = req.body
    const id = req.body.id
    const emp_name  = req.body.empName
    const job_name = req.body.jobName
    const hire_date = req.body.hireDate
    const salary = req.body.salary

    if(username ===dbUsername && password===dbPassword){
        console.log(username , password);

        // we will generate the token after the above user is validated !
        const payLoad ={username,islogged:true};
        const token = jsonwebtoken.sign(payLoad,SECRET,{expiresIn:'1d'});
        console.log("TOKEN",token);
       
        let empObj = {id,emp_name,job_name,hire_date,salary}
        employee.push(empObj)
        console.log(employee);

        fs.writeFile('employee/employee1.json',JSON.stringify(employee), ()=>{})
        res.json({
            message:"Succesfully logged in!"
        })

    }else{
        res.status(403).json({
            message:"Invalid username/ password !"
        })
    }
})

// Middleware --> to identify the user 

async function verifyUser(req,res,next){
    const token = req.headers.authorization;
    // console.log(req.headers);

    if(!token){
        return res.status(403).json({
            message:"token not present !"
        })
    }
    await jsonwebtoken.verify(token,SECRET,function (error,decoded) {
        if(error){
            return res.status(401).json({
                message:"INVALID TOKEN !"
            })
        }
        // setting userData in "req" object as our decoded token !
        req.userData = decoded;
        console.log(decoded);
        next()
    })
}


app.get('/employee',verifyUser, (req, res) => {
    res.send(employee)
})


app.get('/employee/:id',verifyUser, (req, res) => {
    var data_filter = employee.filter((element) => element.id == req.params.id)
        // console.log(data_filter)
    res.send(data_filter);
})


app.put('/employee/:id',verifyUser,(req,res) =>{
    let id = req.params.id;
    let data = req.body;
    console.log(data)
    employee.forEach(element => {
        if (element.id == id) {
            element.emp_name= data.empName;
            element.job_name = data.jobName;
            element.hire_date = data.hireDate;
            element.salary = data.salary
        }
    });
    fs.writeFile('employee/employee1.json', JSON.stringify(employee), () => {})
    res.status(204).send('UPDATED')
})


app.delete('/employee/:id',verifyUser,(req,res)=>{
    let id = req.params.id;
    var data_filter = employee.filter((element) => element.id != id);
    fs.writeFile('employee/employee1.json', JSON.stringify(data_filter), () => {});
    res.status(204).send('Deleted')
})



app.listen(3001, () => console.log('server running...'))