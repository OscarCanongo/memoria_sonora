import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import imagen from "./Imagenes/ola.svg";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const CardAudio = ({ setMostrar, audio, setAudio }) => {

  const onClickMostrar = () => {
    setMostrar(true);
    setAudio(audio);
  }

  //console.log(audio);

  if(!audio)
  return null;

  return (
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="text-center">
            {audio.nombre}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="100"
          width="100"
          image={imagen}
        />
      <CardActions>
        <div className="card-body col text-center">
          <IconButton className ="btn btn-secondary"> 
            <PlayCircleOutlineIcon
              style={{ fontSize: 50 }}
              onClick={onClickMostrar}
            />
          </IconButton>
        </div>
      </CardActions>
    </Card>
    );
}

export default CardAudio;
