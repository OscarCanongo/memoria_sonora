import React from 'react';
import Button from '@material-ui/core/Button';
import imagen from "./Imagenes/ola.svg"

const CardAudio = () => {
    return (  
      <div className = "col-md-3 mb-3">
        <div className = "card">
          <h2 align="center">Alberto</h2>
          <p align="center">31 años </p>
          <img className = "card-img-top" src = {imagen}  height="100%" alt={`Audio`}/>
          <div className = "card-body">
            <Button
              type = "button"
              className = "btn btn-block btn-primary"
            >
              Play
            </Button>
          </div>
        </div>
      </div>
      
    );
}
 
export default CardAudio;