const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secret = process.env.jwtpass;


const auth = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        res.sendStatus(401);
    }else {
        jwt.verify(token, secret, (err,decoded) => {
            if(err){
                res.sendStatus(401);
            } else {
                //passes into the next function also can be named anything doesnt have to be req.x
                req.id = decoded.id;
                req.username = decoded.username;
                next()
            }
        });
    }

}

module.exports = auth
