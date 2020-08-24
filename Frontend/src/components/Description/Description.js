import React from 'react';
import imagen from '../../images/MUI_SONORO-04.png';
import './Description.css';
import PublicSans from '../../fonts/PublicSans-VariableFont_wght.ttf';
import SpaceMono from '../../fonts/SpaceMono-Regular.ttf';

const Description = () => {
    return (
      <div class="container-sm">
        <div class="row">
          <div class="col-sm">
            <h1 class="text-center">Museo Urbano Interactivo</h1>
          </div>
        </div>
        <div class="container-sm">
          <div class="row">
            <div class="col-sm">
              <div class="txt">
                    <p>El <b>MUI (Museo Urbano Interactivo)</b> busca ser un espacio físico
                    y conceptual, en donde se desarrollan personas conscientes,
                    capaces de producir un México con futuro en el que llega a ser
                    una alternativa global.</p> <p>A través de las herramientas propias
                    de las industrias creativas y las prácticas artísticas actuales.
                    Lo que hace el contexto en que está situado.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container-sm">
          <div class = "row">
            <div div class = "col-md-3 ml-md-auto">
              <img  src = {imagen} class="img-fluid float-right" alt="MuiLogo"/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Description;
