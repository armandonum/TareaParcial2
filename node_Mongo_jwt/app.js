const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const authRoutes = require('./rutas/autenticacion');

const app=express();


app.use(bodyParser.json());
app.use('/auth',authRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`esta corriendo en el puerto  ${PORT}`);
});