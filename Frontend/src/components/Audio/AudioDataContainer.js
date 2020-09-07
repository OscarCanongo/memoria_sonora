import React from 'react';
import VisualDemo from './VisualDemo';


class AudioDataContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.frequencyBandArray = [...Array(25).keys()]
        this.audioLink = props.audio.audio
    }


    initializeAudioAnalyser = () => {

        const audioFile = new Audio();
        audioFile.crossOrigin = "anonymous";
        const audioContext = new AudioContext();
        const source = audioContext.createMediaElementSource(audioFile);
        const analyser = audioContext.createAnalyser();
        audioFile.src = "https://cors-anywhere.herokuapp.com/"+this.audioLink;
        analyser.fftSize = 64
        source.connect(audioContext.destination);
        source.connect(analyser);
        audioFile.play()
        this.setState({
            audioData: analyser
        })
    }

    getFrequencyData = (styleAdjuster) => {
        const bufferLength = this.state.audioData.frequencyBinCount;
        const amplitudeArray = new Uint8Array(bufferLength);
        this.state.audioData.getByteFrequencyData(amplitudeArray)
        styleAdjuster(amplitudeArray)
    }

    render() {

        return (
            <div class="container-sm">
                <div class="row">
                    <div class="col-sm">
                        < VisualDemo
                          initializeAudioAnalyser = { this.initializeAudioAnalyser }
                          frequencyBandArray = { this.frequencyBandArray }
                          getFrequencyData = { this.getFrequencyData }
                          audioData = { this.state.audioData }
                          audioLink = { this.audioLink }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default AudioDataContainer;
