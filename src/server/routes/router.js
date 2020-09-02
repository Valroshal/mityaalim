const mysql = require('mysql');

const conn = mysql.createPool({
    host: 'ns1.bluehost.com',
    port: '3306',
    user:'mityaali_valerie',
    password: 'val0527475185',
    database: 'mityaali_hello',
    connectionLimit: 100,
    multipleStatements: true
});

module.exports = conn;