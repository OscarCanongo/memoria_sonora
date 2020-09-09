import React, { Fragment, useEffect, useState } from 'react';
import CardAudio from './CardAudio';
import clienteAxios from './../../config/axios';
import Carousel from "react-elastic-carousel";

const Exhibition = ({setMostrar, setAudio}) => {
    

    const[data, setData] = useState([]);

    useEffect(() => {

        const getAudio = async () => {
            const response = await clienteAxios.get('/');
            setData(response.data.audios);
        }

        getAudio();
        // eslint-disable-next-line
    }, []);

    return (
        <Carousel itemsToShow={4}>
          {data.map((element) => (
            <CardAudio
              setMostrar={setMostrar}
              audio={element}
              setAudio={setAudio}
            />
          ))}
      </Carousel>
    );
}

export default Exhibition;
