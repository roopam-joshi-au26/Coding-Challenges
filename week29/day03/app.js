const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const ejs = require("ejs");
const multer = require('multer');
const app = express();


const PORT = 9000;

var users = []

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.set('view engine', 'ejs');

const uploads = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './public/images')
      },
      filename: function (req, file, cb) {
        const uniquePrefix = Date.now()
        cb(null, `${uniquePrefix}-${file.originalname}`)
      }
    }),
    fileFilter: function fileFilter(req, file, cb) {
  
      if (file.mimetype == 'image/jpeg') {
        cb(null, true)
      } else {
        cb(null, false)
      }
    }
  })    
// home route
app.get('/', (req, res) => {
    res.render(`${__dirname}/public/index.ejs`)
});


app.post('/profile',uploads.single('avatar'), (req, res) => {
    
    
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    let user = {name , email , password}
    const fileData = req.file
    if (fileData){
        user.imageUrl = fileData.filename

    }
    console.log(user)
    users.push(user)
    
    

    fs.appendFile('data/data.json', JSON.stringify(user), () => {})
    res.render(`${__dirname}/submitted.ejs`, { users: users })
})

app.listen(PORT, () => console.log("I am running at port", PORT));
