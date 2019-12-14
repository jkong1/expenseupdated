const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./db')
const cors = require('cors')
const path = require('path')
var port = process.env.PORT || 5000

dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client/ build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/builds', 'index.html'))
});

}

app.listen(port, () => {  console.log('We are live on ' + port);});

