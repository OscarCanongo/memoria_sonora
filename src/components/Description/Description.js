import React from 'react';
import imagen from '../../images/MUI_SONORO-04.png';
import './Description.css';

const Description = () => {
    return (
      <div class="container">
        <div class="row">
          <div class="col" >
            <h1 class="text-center">Museo Urbano Interactivo</h1>
          </div>
          </div>
          <div class="row">
          <div class="txt">
                    El <b>MUI (Museo Urbano Interactivo)</b> busca ser un espacio físico
                    y conceptual, en donde se desarrollan personas conscientes,
                    capaces de producir un México con futuro en el que llega a ser
                    una alternativa global; a través de las herramientas propias
                    de las industrias creativas y las prácticas artísticas actuales.
                    Lo que hace el contexto en que está situado.
          </div>
          <div class="col-sm">
            <img src = {imagen} className="w-75" alt="MuiLogo"/>
          </div>
        </div>
      </div>
    );
}

export default Description;
