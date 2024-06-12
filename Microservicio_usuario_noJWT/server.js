const express = require('express');
const connection = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Ruta para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  connection.query('SELECT * FROM Usuarios', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Ruta para crear un nuevo usuario
app.post('/usuarios', (req, res) => {
  const { nombre, email, password } = req.body;
  const query = 'INSERT INTO Usuarios (nombre, email, password) VALUES (?, ?, ?)';

  connection.query(query, [nombre, email, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, nombre, email });
  });
});

app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});


module.exports = app;