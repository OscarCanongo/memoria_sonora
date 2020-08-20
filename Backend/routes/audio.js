const express = require('express');
const router = express.Router();
const audioController = require('../controllers/audioController');

router.post('/',
    audioController.crearAudio
);

module.exports = router
