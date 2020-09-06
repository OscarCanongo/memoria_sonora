import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import imagen from "./Imagenes/ola.svg";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const CardAudio = ({setMostrar, audio}) => {

  const onClickMostrar = () => {
    setMostrar(true);
  }

  console.log(audio);

  if(!audio) 
  return null;

  return (
      <div className = "col-md-4 mb-3">
        <div className = "card">
          <h2 align="center">{audio.nombre}</h2>
          <p align="center">31 años </p>
          <img src = {imagen} alt={`Audio`} width= '100%' height='100'/>
          <div className = "card-body col text-center">
            <IconButton className ="btn btn-secondary">
              <PlayCircleOutlineIcon
                style={{ fontSize: 50 }}
                onClick={onClickMostrar}
              />
            </IconButton>
          </div>
        </div>
      </div>

    );
}

export default CardAudio;
