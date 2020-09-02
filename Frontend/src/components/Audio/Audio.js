import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Audio = () => {

    var createPlayer = require('web-audio-player')

    var audio = createPlayer('assets/audio.mp3')

    audio.on('load', () => {
      console.log('Audio loaded...')

      // start playing audio file
      audio.play()

      // and connect your node somewhere, such as
      // the AudioContext output so the user can hear it!
      audio.node.connect(audio.context.destination)
    })

    audio.on('ended', () => {
      console.log('Audio ended...')
    })

    return (
      <AudioPlayer
        autoPlay
        src="https://firebasestorage.googleapis.com/v0/b/memoriasonora-e2da7.appspot.com/o/Copia%20de%20Adriana%20Carvente.mp3?alt=media&token=38e2e7c8-4723-40f6-9878-4ef3011871df"
        onPlay={e => console.log("onPlay")}
        // other props here
      />
    );
}

export default Audio;
