import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import imagen from "./Imagenes/ola.svg";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const CardAudio = () => {
    
  return (  
      <div className = "col-md-3 mb-3">
        <div className = "card">
          <h2 align="center">Alberto</h2>
          <p align="center">31 años </p>
          <img className = "card-img-top" src = {imagen} alt={`Audio`}/>
          <div className = "card-body col text-center">
            <IconButton className ="btn btn-secondary">
              <PlayCircleOutlineIcon
                style={{ fontSize: 50 }}
              />
            </IconButton>
          </div>
        </div>
      </div>
      
    );
}
 
export default CardAudio;