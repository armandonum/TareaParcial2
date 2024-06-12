
const Usuario = require('../models/usuarioModel');

exports.getAllUsuarios = (req, res) => {
    Usuario.getAll((err, usuarios) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener los usuarios' });
            return;
        }
        res.json(usuarios);
    });
};

exports.createUsuario = (req, res) => {
    const nuevoUsuario = req.body;
    Usuario.create(nuevoUsuario, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al crear el usuario' });
            return;
        }
        res.status(201).json({ message: 'Usuario creado exitosamente', usuario: result });
    });
};
