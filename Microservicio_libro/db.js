// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: "",
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) throw err;
    console.log('conectado a la base de datos');
});

module.exports = connection;
