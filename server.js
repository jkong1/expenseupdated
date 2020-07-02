const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./db')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser');
const auth = require('./middleware');
var port = process.env.PORT || 5000

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.get('/api/hello', (req,res) => {
  res.send({express: 'hello there'})
})


app.post('/api/createuser', (req,res) => {
    db.createuser({
        username: req.body.username,
        password: req.body.password,
        res:res
    })
})

app.post('/api/login', (req,res) => {
  db.login({
    username:req.body.username,
    password: req.body.password,
    res:res
  })
})
//get data from the middleware to this req
app.post('/api/submitData', auth, (req,res) => {
  db.submitData({
    option:req.body.option,
    name:req.body.name,
    price:req.body.price,
    res:res,
    id:req.id
  })
})

app.get('/api/getReport', auth, (req,res) => {
  db.getReport({
    id:req.id,
    res:res
  })
} )

app.get('/api/checktoken', auth, (req,res) => {
  res.sendStatus(200);
})

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

}

app.listen(port, () => {  console.log('We are live on ' + port);});

