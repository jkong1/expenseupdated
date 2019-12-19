const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secret = process.env.jwtpass;

const auth = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        res.sendStatus(401)
    }else {
        jwt.verify(token, secret, (err,decoded) => {
            if(err){
                res.sendStatus(401);
            } else {
                req.username = decoded.username;
                next();
            }
        });
    }

}

module.exports = auth;