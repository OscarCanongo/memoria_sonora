const mongoose = require('mongoose');

const AudioSchema = mongoose.Schema({
    nombre: {
      type: String,
      require: true
    },
    audio: {
      type: true
      require: true
    }
});
