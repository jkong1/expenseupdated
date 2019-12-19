const {Pool,Client} = require('pg')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
dotenv.config();
const secret = process.env.jwtpass

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
                    console.log(err)
                    console.log("An error was found")
                    client.end()
                    res.sendStatus(401)
                } else {
                    res.sendStatus(200)
                    client.end()
                }

            })
            })
        },
        login({username,password,res}){
            var qry = 'SELECT * FROM users WHERE username=$1'
            client.query(qry,[username]).then((result,err) =>{
                if(result.rows.length > 0){
                    bcrypt.compare(password,result.rows[0].password).then((same,err)=>{
                        if(same){
                            const payload = {username};
                            const token = jwt.sign(payload,secret, {
                                expiresIn:'1h'
                            });
                            res.cookie('token', token, {httpOnly:true}).sendStatus(200);

                        } else {
                            res.sendStatus(401)
                        }
                    })
                } else {
                    res.sendStatus(401)
                }  
            });
        }
    }
