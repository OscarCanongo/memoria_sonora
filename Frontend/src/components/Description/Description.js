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
            <h1 class="text-center">Museo Urbano Interactivo</h1>
          </div>
        </div>

            <div className = "row">
              <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div class="txt" >
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                        El MUI (Museo Urbano Interactivo) busca ser un espacio físico
                        y conceptual, en donde se desarrollan personas conscientes,
                        capaces de producir un México con futuro en el que llega a ser
                        una alternativa global.A través de las herramientas propias
                        de las industrias creativas y las prácticas artísticas actuales.
                        Lo que hace el contexto en que está situado.
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
    delay: ({ charIndex }) => charIndex * 30
  }
};


export default Description;
