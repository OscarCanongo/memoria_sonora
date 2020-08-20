const Audio = require ('../models/Audio');

exports.crearAudio = async (req, res) => {

  try {
      let audio = new Audio(req.body);
      console.log("BIEN")
      await audio.save();

  } catch (e) {
      console.log("ERROR");
  }
}
