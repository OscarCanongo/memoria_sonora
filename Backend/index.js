const express = require('express');
const conection= require('./config/db');

//Crear el servidor
const app = express();

//Conectar a la base de datos
conection();

//Habilitar express.json
app.use(express.json({ extended: true}));

//Puerto del server
const port = process.env.PORT || 4000

//Importar rutas
app.use('/', require('./routes/audios'));

//Arrancar server
app.listen(port, () => {
    console.log(`El server esta corriendo en el puerto ${port}`);
});
