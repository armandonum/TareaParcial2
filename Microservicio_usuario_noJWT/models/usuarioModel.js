// usuarioModel.js
const db = require('../personas');

class Usuario {
    static getAll(callback) {
        db.query('SELECT * FROM Usuarios', (err, results) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, results);
        });
    }

    static create(usuario, callback) {
        db.query('INSERT INTO Usuarios SET ?', usuario, (err, result) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, result);
        });
    }
}

module.exports = Usuario;
