import React from 'react';
import Logo from '../../images/memoria_sonora_logo.png';
import './Introduction.css';
import ParticlesBg from 'particles-bg';
import {MDBCol } from "mdbreact";
const Header = () => {
    return (
        <div  className="d-flex justify-content-center" >
            <MDBCol md="8"  >
            <img className="img-fluid"  src={Logo} alt="aligment"></img>
            </MDBCol>
            <ParticlesBg type="cobweb" bg={true}/>
        </div>
    );
}

export default Header;
