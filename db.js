const {Pool,Client} = require('pg')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const { query } = require('express');
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
            var qry = "INSERT INTO users(username,password) values($1, $2)"
            client.query(qry,[username,hash]).catch(function(err){
                if(err){
                    res.sendStatus(401);
                }
            }).then((result) => {
                if(result){
                    res.sendStatus(200);
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
                            const payload = {username, id:result.rows[0].id};
                            const token = jwt.sign(payload,secret, {
                                expiresIn:'1h'
                            });
                            res.cookie('token', token, {httpOnly:true}).sendStatus(200);

                        } else {
                            res.sendStatus(401);
                        }
                    })
                } else {
                    res.sendStatus(401);
                }  
            });
        },
        submitData({option,name,price,res,id}){
            var qry = 'INSERT INTO input(userid,option,name,price) values($1,$2,$3,$4)';
            client.query(qry,[id,option,name,price]).catch((err)=> {
                if(err){
                    res.sendStatus(401);
                }
            }).then((result) => {
                if(result){
                    res.sendStatus(200);
                }
            })
        },
        getReport({id,res}){
            var qry = "SELECT option,name,price from input where userid = $1";
            client.query(qry,[id]).catch((err) => {
                if(err){
                    res.sendStatus(401);
                }
            }).then((result) => {
                if(result){
                    res.send(result.rows);
                }
            })
        }
}
