//import User from '../sequelize';
const bcrypt = require('bcrypt');
const User = require('../sequelize');

const BCRYPT_SALT_ROUNDS = 12;
module.exports = (app) => {
    app.post('/adduser', (req, res) =>{
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password, 
        };
        if(data.password == '' || data.name == '' || data.email == ''){
            res.json('name, email and password required');
        }
        User.findOne({
            where: {
                name : data.name
            }
        })
        .then(user => {
            if(user != null){
                console.log('name already taken');
                res.json('name already taken');
            } else {
                bcrypt.hash(data.password, BCRYPT_SALT_ROUNDS)
                    .then(function(hashedPassword){
                        console.log(hashedPassword);
                        User.create({
                            name: req.body.name,
                            email: req.body.email,
                            password: hashedPassword, 
                        })
                    })
                    .then(() =>{
                        console.log('user created');
                        res.json('user created');
                    })
            }
        })
        .catch(err =>{
            console.log('problem communicating with db');
            res.status(500).json(err);
        })
    })
};