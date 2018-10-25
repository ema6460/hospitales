var mongoose = require('mongoose');



// Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', {
    useNewUrlParser: true
}, (err, rep) => {
    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

});