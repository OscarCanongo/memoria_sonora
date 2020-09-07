import React, { Fragment, useState } from 'react';
import Introduction from './components/Introduction/Introduction';
import Description from './components/Description/Description';
import Exhibitions from './components/Exhibition/Exhibition';
import Footer from './components/Footer/Footer';
import VisualDemo from './components/Audio/AudioDataContainer';

function App() {

  //State
  const[mostrar, setMostrar] = useState(false);
  const[audio, setAudio] = useState({});

  return (
    <Fragment>
      <Introduction/>
      <Description/>
      { mostrar
        ? <VisualDemo
            audio = { audio }
          />
        : null
      }
      <div className = "container mt-5">
        <Exhibitions
          setMostrar = { setMostrar }
          setAudio = { setAudio }
        />
      </div>
      <Footer/>
    </Fragment>
  )
}

export default App;
