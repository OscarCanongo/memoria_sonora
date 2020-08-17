import React from 'react';
import imagen from '../../images/MUI_SONORO-04.png';

const Description = () => {
    return (
      <div class="container">
        <div class="row">
          <div class="col" >
            <h1 class="text-center">Museo Urbano Interactivo</h1>
          </div>
          </div>
          <div class="row">
          <div class="col-sm" >
            El MUI (Museo Urbano Interactivo) busca ser un espacio fisico y conceptual,
            en donde se desarrollan personas concientes, capaces de producir un México
            con futuro en el que llega a ser una alternativa global; a través de las
            herramientas propias de las industrias creativas de las prácticas artísticas actuales.
            Lo que hace desde el contexto en el que esta situado.
          </div>
          <div class="col-sm">
            <img className = "img" src = {imagen} className="w-75"/>
          </div>
        </div>
      </div>
    );
}

export default Description;
