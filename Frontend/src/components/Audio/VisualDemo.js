import React, { useRef, Fragment, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { makeStyles } from "@material-ui/core/styles";
import "./stylesheets/App.scss";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";

const muiTheme = createMuiTheme({});

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: "25%",
    height: 200,
  },
}));

export default function VisualDemo(props) {

  useEffect(() => {

      handleStartBottonClick();

      // eslint-disable-next-line
  }, []);

  const classes = useStyles();

  const amplitudeValues = useRef(null);

  function adjustFreqBandStyle(newAmplitudeData) {
    amplitudeValues.current = newAmplitudeData;
    let domElements = props.frequencyBandArray.map((num) =>
      document.getElementById(num)
    );
    for (let i = 0; i < props.frequencyBandArray.length; i++) {
      let num = props.frequencyBandArray[i];
      domElements[
        num
      ].style.backgroundColor = `rgb(0, 0, ${amplitudeValues.current[num]})`;
      domElements[num].style.height = `${amplitudeValues.current[num]}px`;
    }
  }

  function runSpectrum() {
    props.getFrequencyData(adjustFreqBandStyle);
    requestAnimationFrame(runSpectrum);
  }

  function handleStartBottonClick() {
    props.initializeAudioAnalyser();
    requestAnimationFrame(runSpectrum)
  }

  return (


      <div className={classes.flexContainer}>
        {props.frequencyBandArray.map((num) => (
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
