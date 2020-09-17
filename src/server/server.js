const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

//const con = mysql.createPool({  //for remote db
    //host: '70.40.218.93',
    //port: '3306',
    //user:'mityaalim.org',
    //password: '!TowerJazz2019',
    //database: 'mityaali_hello',
    //connectionLimit: 100,
    //multipleStatements: true,
    // connectionLimit : 1000,
    // connectTimeout  : 60 * 60 * 1000,
    // acquireTimeout  : 60 * 60 * 1000,
    // timeout         : 60 * 60 * 1000
//});

const con = mysql.createPool({ //for local db
    host: 'localhost',
    user:'valerie',
    password: 'val0527475185',
    database: 'mityaalim_test',
    connectionLimit : 1000,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000
});

con.getConnection((err)=>{
    if(err){
        console.log(err);
    } else {
        console.log('connected');
    }
});


app.get('/', (req,res,next) =>{
    // res.render('index', {title: 'Express'});
    //next(err);
});

app.get('/check', (req,res) =>{
    con.query('select * from wp_fhvw_actionscheduler_actions', function(err, result){
        if(err) {
            res.send(err)
        }else{
            res.send('RESULT IS: ', result)
        }
    })
})

const port = process.env.PORT || 3306;
app.listen(port, () => console.log(`Server is running on ${port}`));