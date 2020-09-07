import React, { Fragment, useEffect, useState } from 'react';
import CardAudio from './CardAudio';
import clienteAxios from './../../config/axios';

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
        <Fragment>
            <h1 align="center">Exposición</h1>
            <div className = "row mt-5">
                {
                    data.map(element=><CardAudio
                        setMostrar = { setMostrar }
                        audio = { element }
                        setAudio = { setAudio }
                    />)
                }
            </div>
        </Fragment>
    );
}

export default Exhibition;
