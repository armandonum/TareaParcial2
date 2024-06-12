// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const connection = require('./db');
const app = express();

app.use(bodyParser.json());

// Middleware de autenticación
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

// Rutas de autenticación
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = { id: 1, username: 'user', password: 'password' }; // Hash de contraseña en producción

    if (username === user.username && bcrypt.compareSync(password, bcrypt.hashSync(user.password, 8))) {
        const accessToken = jwt.sign({ username: user.username, id: user.id }, process.env.JWT_SECRET);
        res.json({ accessToken });
    } else {
        res.send('Username or password incorrect');
    }
});

// Rutas del microservicio libro
app.get('/libros', authenticateJWT, (req, res) => {
    connection.query('SELECT * FROM Libro', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/libros/:id', authenticateJWT, (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM Libro WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
});

app.post('/libros', authenticateJWT, (req, res) => {
    const { titulo, editorial_id, edicion, pais, precio } = req.body;
    const query = 'INSERT INTO Libro (titulo, editorial_id, edicion, pais, precio) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [titulo, editorial_id, edicion, pais, precio], (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, ...req.body });
    });
});

app.put('/libros/:id', authenticateJWT, (req, res) => {
    const { id } = req.params;
    const { titulo, editorial_id, edicion, pais, precio } = req.body;
    const query = 'UPDATE Libro SET titulo = ?, editorial_id = ?, edicion = ?, pais = ?, precio = ? WHERE id = ?';
    connection.query(query, [titulo, editorial_id, edicion, pais, precio, id], (err) => {
        if (err) throw err;
        res.send('libro actualizado  correctamente.');
    });
});

app.delete('/libros/:id', authenticateJWT, (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Libro WHERE id = ?';
    connection.query(query, [id], (err) => {
        if (err) throw err;
        res.send('libro eliminado correctamente.');
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
