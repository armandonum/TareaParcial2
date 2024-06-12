
const express = require('express');
const router = express.Router();
const usuarioController = require('../app/usuarioController');

router.get('/usuarios', usuarioController.getAllUsuarios);

// Ruta para crear un nuevo usuario
router.post('/usuarios', usuarioController.createUsuario);

module.exports = router;
