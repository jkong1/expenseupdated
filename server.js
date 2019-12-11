const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./db')
const cors = require('cors')

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(process.env.portserver, () => {  console.log('We are live on ' + process.env.portserver);});

app.post('/createuser', (req,res) => {
    db.createuser({
        username: req.body.username,
        password: req.body.password,
        res:res
    })
})
