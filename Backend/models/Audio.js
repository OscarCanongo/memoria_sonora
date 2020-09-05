const mongoose = require('mongoose');

const AudioSchema = mongoose.Schema({
    nombre: {
      type: String,
      require: true
    },
    audio: {
      type: String,
      require: true
    }
});

module.exports = mongoose.model('Audio', AudioSchema);
