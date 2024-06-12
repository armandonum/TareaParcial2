
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/autenticacion', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
}).then(() => {
    console.log('Conectado con MongoDB');
}).catch((err) => {
    console.error('Error en la conexión:', err.message);
});
