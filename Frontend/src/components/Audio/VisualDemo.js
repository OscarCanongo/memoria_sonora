import React, { useRef, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import "./stylesheets/App.scss";



const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    paddingTop: "35%",
    height: 200,
    flex: "1 0 auto",
    overflow: "hidden",
    marginTop: "80px"
  },
}));

export default function VisualDemo({initializeAudioAnalyser, frequencyBandArray, getFrequencyData, audioData, audioLink}) {

  useEffect(() => {


      handleStartBottonClick();

      // eslint-disable-next-line
  }, [audioLink]);

  const classes = useStyles();

  const amplitudeValues = useRef(null);

  function adjustFreqBandStyle(newAmplitudeData) {
    amplitudeValues.current = newAmplitudeData;
    let domElements = frequencyBandArray.map((num) =>
      document.getElementById(num)
    );
    for (let i = 0; i < frequencyBandArray.length; i++) {
      let num = frequencyBandArray[i];
      domElements[
        num
      ].style.backgroundColor = `rgb(21, 255, ${amplitudeValues.current[num]})`;
      domElements[num].style.height = `${amplitudeValues.current[num]}px`;
    }
  }

  function runSpectrum() {
    getFrequencyData(adjustFreqBandStyle);
    requestAnimationFrame(runSpectrum);
  }

  function handleStartBottonClick() {
    initializeAudioAnalyser();
    requestAnimationFrame(runSpectrum)
  }

  return (


      <div className={classes.flexContainer}>
        {frequencyBandArray.map((num) => (
          <Paper
            className={"frequencyBands"}
            elevation={4}
            id={num}
            key={num}
          />
        ))}
      </div>


  );
}
