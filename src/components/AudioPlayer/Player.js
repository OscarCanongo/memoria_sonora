import React from 'react'
import ReactHowler from 'react-howler'

const Player = (props) => {
    return (
        <ReactHowler
            src='../../../audios'
            playing={true}
        />
    );
}

export default Player;