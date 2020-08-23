import React, { Fragment } from 'react';
import CardAudio from './CardAudio';

const Exhibition = () => {
    return (  
        <Fragment>
            <h1 align="center">Exposición</h1>
            <div className = "row mt-5">
                <CardAudio/>
                <CardAudio/>
                <CardAudio/>
                <CardAudio/>
                <CardAudio/>
                <CardAudio/>
                <CardAudio/>
                <CardAudio/>
            </div>
        </Fragment>    
    );
}
 
export default Exhibition;