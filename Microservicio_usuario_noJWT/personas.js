// const settings = require('./setting');
// const bodyparser = require('body-parser');
// const mysql = require('mysql');
// const express = require('express');
// const path = require('path');
// const sharp = require('sharp');
// const app = express();

// const db = mysql.createConnection(settings.db);


// db.connect((err) => {
//   if (err) throw err;
//     console.log('Connected to database');

//     app.listen(3002, {}, () => {
        
//         console.log('Server started on port 3001');
//     });
// });

// module.exports = db;

const settings = require('./setting');
const mysql = require('mysql');

const db = mysql.createConnection(settings.db);

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

module.exports = db;
