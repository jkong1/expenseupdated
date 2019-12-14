const {Pool,Client} = require('pg')
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcryptjs');
const client = new Client({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.portdb,
  })
client.connect()

module.exports = {
    createuser({username,password,res}){
        bcrypt.hash(password,10,function(err,hash){
            var qry = "INSERT INTO users(password,username) values($1, $2)"
            client.query(qry, [hash, username]).catch(function(err,result){
                if(err){
                    console.log("An error was found")
                    client.end()
                    res.sendStatus(401)
                } else {
                    res.sendStatus(200)
                    client.end()
                }

            })
            })
        }
}