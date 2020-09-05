const express = require('express');
const router = express.Router();
const audioController = require('../controllers/audioController');
const { check } = require ('express-validator');

//Agregar un audio
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('audio', 'El audio es obligatorio').not().isEmpty(),
    ],
    audioController.crearAudio
);

//Obtener todos los audios
router.get('/',
    audioController.obtenerAudios
)

module.exports = router;
