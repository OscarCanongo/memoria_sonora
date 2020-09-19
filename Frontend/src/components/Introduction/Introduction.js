import React from 'react';
import Logo from '../../images/memoria_sonora_logo.png';
import './Introduction.css';
import ParticlesBg from 'particles-bg';

const Header = () => {
    return (
        <div>
            <img className="imagen" class="img-fluid" src={Logo} alt="Memoria Sonora Logo" width = "70%"></img>
            <ParticlesBg type="cobweb" bg={true}/>
        </div>
    );
}

export default Header;
