const express = require('express');
const conection= require('./config/db');

//Crear el servidor
const app = express();

//Conectar a la base de datos
conection();

//Habilitar express.json
app.use(express.json({ extended: true}));

//Puerto del server
const PORT = process.env.PORT || 4000;

//Importar rutas
//app.use('/api/usuarios', require('./routes/usuarios'));

//Arrancar server
app.listen(PORT, () => {
    console.log(`El server esta corriendo en el puerto ${PORT}`);
});
