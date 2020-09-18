import React from 'react';
import imagen from '../../images/MUI_SONORO-04.png';
import yourFileHover from '../../images/morado.png';
import './Description.css';
import SplitText from 'react-pose-text';
import HoverImage from "react-hover-image";

const Description = () => {
    return (
      <div class="container-sm">
        <div class="row">
          <div class="col-sm">
            <h1 class="text-center">Descripcion del proyecto</h1>
          </div>
        </div>

            <div className = "row">
              <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div class="txt" >
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                        "Memoria Sonora es un proyecto de documentación gestado durante la Residencia COVID,
                        tiene como  objetivo recopilar audios del sentir de las personas durante el COVID,
                        con esta información el MUI realiza ejercicios sonoros."
                    </SplitText>
                </div>
              </div>
              <div className = "col-lg-2 col-md-2 col-sm-2 col-xs-2">

              </div>
              <div className = "col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <div class = "img-fluid">
                <HoverImage src={imagen} hoverSrc={yourFileHover}  class="img-fluid float-right width: 100%" style={{width : '100%'}} alt="MuiLogo"/>
              </div>
              </div>
            </div>
      </div>
    );
}
const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 50
  }
};


export default Description;
