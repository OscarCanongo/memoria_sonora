import React from 'react';
import Logo from '../../images/memoria_sonora_logo.png';
import './Introduction.css';

const Header = () => {
    return (  
        <div className="container-div">
            <img src={Logo} alt="Memoria Sonora Logo"></img>
        </div>
    );
}
 
export default Header;