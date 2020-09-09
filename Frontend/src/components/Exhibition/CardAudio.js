import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import imagen from "./Imagenes/ola.svg";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {audio.nombre}
          </Typography>
        </CardContent>
        <CardMedia
          className="img"
          image={imagen}
        />
      <CardActions>
        <IconButton className ="btn btn-secondary">
          <PlayCircleOutlineIcon
            style={{ fontSize: 50 }}
            onClick={onClickMostrar}
          />
        </IconButton>
      </CardActions>
    </Card>
    );
}

export default CardAudio;
