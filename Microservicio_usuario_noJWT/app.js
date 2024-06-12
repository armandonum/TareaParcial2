const express = require('express');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./rutas/usuarioRutas');

const app = express();

app.use(bodyParser.json());

// Rutas de usuario
app.use('/api', usuarioRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
