const Audio = require ('../modeles/Audio');

exports.crearAudio = async (req, res) => {

  try {
      audio = new Audio(req.body);
      await audio.save();
      res.json({msg: "Audio agregado correctamente"});
  } catch (e) {
      res.status(400).send("Hubo un error");
  }
}
