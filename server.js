const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./db')
const cors = require('cors')
var port = process.env.PORT || 5000

const origin = process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : 'https://expenseupdated.herokuapp.com/'

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin}));
app.listen(port, () => {  console.log('We are live on ' + port);});


app.post('/createuser', (req,res) => {
    db.createuser({
        username: req.body.username,
        password: req.body.password,
        res:res
    })
})
