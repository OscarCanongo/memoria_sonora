import React from 'react';
import VisualDemo from './VisualDemo';
import "./stylesheets/index.scss";


let audioFile = new Audio();

const AudioDataContainer = ({audio}) => {

    let state = {};
    let frequencyBandArray = [...Array(20).keys()];

    //console.log(audio);

    const initializeAudioAnalyser = () => {
        audioFile.pause();
        //console.log(audioFile.src)
        audioFile = new Audio();
        audioFile.crossOrigin = "anonymous";
        const audioContext = new AudioContext();
        const source = audioContext.createMediaElementSource(audioFile);
        const analyser = audioContext.createAnalyser();
        audioFile.src = "https://cors-anywhere.herokuapp.com/"+audio.audio;
        analyser.fftSize = 64
        source.connect(audioContext.destination);
        source.connect(analyser);
        audioFile.play()
        state = {
            audioData: analyser
        }
    }

    const getFrequencyData = (styleAdjuster) => {
        const bufferLength = state.audioData.frequencyBinCount;
        const amplitudeArray = new Uint8Array(bufferLength);
        state.audioData.getByteFrequencyData(amplitudeArray)
        styleAdjuster(amplitudeArray)
    }

        return (
            <div className="container-sm">
                <div className="row">
                    <div className="bg">
                          < VisualDemo
                            initializeAudioAnalyser = { initializeAudioAnalyser }
                            frequencyBandArray = { frequencyBandArray }
                            getFrequencyData = { getFrequencyData }
                            audioData = { state.audioData }
                            audioLink = { audio }
                          />
                    </div>
                </div>
            </div>
        );
}

export default AudioDataContainer;
