import React, { Fragment, useEffect } from 'react';
import CardAudio from './CardAudio';
import clienteAxios from './../../config/axios';

const Exhibition = ({setMostrar, setAudio, audio}) => {

    useEffect(() => {
        
        const getAudio = async () => {
            const response = await clienteAxios.get('/');
            setAudio(response.data.audios[0]);
            console.log(response.data.audios[0].nombre)
        }
        
        getAudio();
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <h1 align="center">Exposición</h1>
            <div className = "row mt-5">
                <CardAudio
                    setMostrar = { setMostrar }
                    audio = { audio }
                />
                <CardAudio
                    setMostrar = { setMostrar }
                    audio = { audio }
                />
                <CardAudio
                    setMostrar = { setMostrar }
                    audio = { audio }
                />
                <CardAudio
                    setMostrar = { setMostrar }
                    audio = { audio }
                />
                <CardAudio
                    setMostrar = { setMostrar }
                    audio = { audio }
                />
                <CardAudio
                    setMostrar = { setMostrar }
                    audio = { audio }
                />
            </div>
        </Fragment>
    );
}

export default Exhibition;
