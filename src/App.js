import React, { Fragment } from 'react';
import Introduction from './components/Introduction/Introduction';
import Description from './components/Description/Description';
import Exhibitions from './components/Exhibition/Exhibition';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Fragment>
      <Introduction/>
      <Description/>
      <div className = "container mt-5">
        <Exhibitions/>
      </div>
      <Footer/>
    </Fragment>
  )
}

export default App;
