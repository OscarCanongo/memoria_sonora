import React, { Fragment } from 'react';
import CardAudio from './CardAudio';

const Exhibition = ({setMostrar}) => {

    return (
        <Fragment>
            <h1 align="center">Exposición</h1>
            <div className = "row mt-5">
                <CardAudio
                    setMostrar = {setMostrar}
                />
                <CardAudio
                    setMostrar = {setMostrar}
                />
                <CardAudio
                    setMostrar = {setMostrar}
                />
                <CardAudio
                    setMostrar = {setMostrar}
                />
                <CardAudio
                    setMostrar = {setMostrar}
                />
                <CardAudio
                    setMostrar = {setMostrar}
                />
            </div>
        </Fragment>
    );
}

export default Exhibition;
