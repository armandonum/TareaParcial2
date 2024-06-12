

const settings = require('./setting');
const mysql = require('mysql');

const db = mysql.createConnection(settings.db);

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

module.exports = db;
