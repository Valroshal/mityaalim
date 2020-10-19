const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const users = require('./routes/usersAPI')
const cors = require('cors')

app.use(cors({credentials: true, origin: 'http://localhost:19006'}));
app.use(bodyParser.json({type:'application/json'}));
//app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:19006');
    next();
})

const con = mysql.createPool({
    // host: '70.40.218.93',
    // user:'mityaalim.org',
    // password: '!TowerJazz2019',
    // database: 'mityaali_hello',
    //connectionLimit: 100,
    multipleStatements: true,
    host: 'localhost',
    user:'valerie',
    password: 'val0527475185',
    database: 'userdb',
    connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000
});

con.getConnection(function(err){
    if(err) console.log(err);
    else console.log('connected');
});


// app.get('/', function(req,res,next){
//     // res.render('index', {title: 'Express'});
//     //next(err);
// });

app.get('/check',(req,res) =>{
    con.query('select * from users', function(err, result){
    //con.query('select * from wp_fhvw_actionscheduler_actions', function(err, result){
        if(err) {
            res.send(err)
        }else{
            res.status.send('RESULT IS: ', result)
        }
    })
})

//create db
app.get('/createdb',(req,res) =>{
    let sql = 'CREATE DATABASE userdb';
    con.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send('DBcreated');
    });
});

//create table
app.get('/createuserstable', (req,res) =>{
    let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, name VARCHAR(50), email VARCHAR(100), password VARCHAR(50), PRIMARY KEY (id) )';
    con.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send('users table created');
    });
});

//Insert user
app.post('/adduser', (req,res) =>{
    let user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    let sql = 'INSERT INTO users SET ?';

    con.query(sql, user, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:19006');
        res.send('user added');
    });
})

//select users
app.get('/getuser', (req,res) =>{
    let sql = 'SELECT * FROM users';
    con.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:19006');
        res.send(result);
    });

    // User.findOne({ email: req.body.email }).then(user => {
	// 	//there is a user with that email
	// 	if (user) {
	// 		errors.email = 'Email already exists';
	// 		return res.status(400).json(errors);
	// 	} //if there isn't then we need to create a user
	// 	else {
	// 		//req.body.-will come from the form
	// 		const user = {
	// 			name: req.body.name,
	// 			email: req.body.email,
	// 			password: req.body.password,
    //         };
    //     }
});

//select videos
app.get('/getvideo', (req,res) =>{
    let sql = 'SELECT * FROM video';
    con.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:19006');
        res.send(result);
    });
});
//Use Routes - Initilaze routes
//app.use('/api/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on ${port}`));