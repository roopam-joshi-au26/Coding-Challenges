const express = require('express');
const multer = require('multer')
const app = express();
let ejs = require('ejs');
const fs = require('fs')
const PORT = 3002;

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.set('view engine', 'ejs')
app.use(express.static('public'))
const arr = [];

// cloudinary config
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dtyem72cg',
    api_key: '469153371657624',
    api_secret: 'Bt4AZfDGOJEruuT8wR4__BsTEXA',
    secure: true
});


// multer cofig
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, `${__dirname}/public/my-uploads`)
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, file.fieldname + '-' + uniqueSuffix + '.png')
    }
})


const upload = multer({ storage: storage })


app.get('/upload', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html')
})

app.post('/post', upload.single('myfile'), (req, res) => {
    cloudinary.uploader.upload(`${req.file.path}`, (error, result) => {
            if (error) {
                throw error
            } else {
                console.log(result);
                arr.push(result.url);

            }
        })
        // fs.unlink(req.file.path, () => {})
    res.send('uploaded')
})

app.get('/gallery', (req, res) => {
    console.log(arr)
    arr.forEach(element => {
        console.log(element)
    });
    res.render(__dirname + '/ui.ejs', { arr })
})

app.listen(PORT, () => {
    console.log('server is up at port', PORT)
})