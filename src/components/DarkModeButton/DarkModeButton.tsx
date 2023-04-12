import React from 'react';
import './DarkModeButton.css'
import lightMoon from '../../assets/lightMoon.svg'
import darkMoon from '../../assets/darkMoon.svg'
import { ThemeProps } from '../Header/Header';

const DarkModeButton = ({handleTheme, currentTheme} : ThemeProps) => {
    return (
        <div className="DarkModeButton" onClick={handleTheme}>
            <img src={currentTheme ? darkMoon : lightMoon} alt="Moon picto" />
            <span>Dark Mode</span>
        </div>
    )
}

export default DarkModeButton;