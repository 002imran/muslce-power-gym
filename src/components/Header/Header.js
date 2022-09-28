import React from 'react';
import './Header.css';
import Img from './muscle-logo.png';
const Header = () => {
    return (
        <div className='nav'>
            <img src={Img} alt=''></img>
            <h1 className='logo'>MusclePower GYM</h1>
            
        </div>
    );
};

export default Header;