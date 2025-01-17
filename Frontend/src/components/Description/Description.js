import React from 'react';
import imagen from '../../images/MUI_SONORO-04.png';
import yourFileHover from '../../images/morado.png';
import './Description.css';
import SplitText from 'react-pose-text';
import HoverImage from "react-hover-image";
const Description = () => {
    return (
      <div className="container-sm">
        <div className="row">
          <div className="col-sm">
            <h1 className="text-center">Descripción del proyecto</h1>
          </div>
        </div>

            <div className = "row">
                <div className="txt" >
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                        "Memoria Sonora es un proyecto de documentación gestado durante la Residencia COVID,
                        tiene como  objetivo recopilar audios del sentir de las personas durante el COVID,
                        con esta información el MUI realiza ejercicios sonoros."
                    </SplitText> 
                </div>
              </div>
              <div className="text-center">
                <HoverImage src={imagen} hoverSrc={yourFileHover}  class="img-fluid width: 100%" style={{width : '35%'}} alt="MuiLogo"/>
            
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
