import React, { Fragment, useEffect, useState } from 'react';
import CardAudio from './CardAudio';
import clienteAxios from './../../config/axios';
import Carousel from "react-elastic-carousel";

const Exhibition = ({setMostrar, setAudio}) => {
    
    
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]

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
        <div className = "row mt-5" breakPoints={breakPoints}>
            <Carousel itemsToShow={6}>
                {data.map((element) => (
                <CardAudio
                    setMostrar={setMostrar}
                    audio={element}
                    setAudio={setAudio}
                />
                ))}
            </Carousel>
        </div>
    
    );
}

export default Exhibition;
