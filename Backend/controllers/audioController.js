const Audio = require ('../models/Audio');
const { validationResult } = require('express-validator');

//Post audios
exports.crearAudio = async (req, res) => {

  //Revisar si hay errores
  const error = validationResult(req);

  if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() })
  }

  const { audio} = req.body;

  try {

      //Revisa que el audio sea unico
      let audioBase = await Audio.findOne({ audio });

      if (audioBase) {
          return res.sustatus(400).json({ msg: 'El audio ya existe'});
      }

      //Crea un nuevo audio
      audioBase = new Audio(req.body);

      //Guarda el audio
      await audioBase.save();

      //Mensaje de confirmacion
      res.json({ msg: 'Audio creado correctamente'});

  } catch (error) {
    res.status(400).send("Hubo un error");
    console.log(error);
  }
}

//Get audios
exports.obtenerAudios = async (req, res) => {
    try {

        const audios = await Audio.find();
        res.json({ audios });

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
