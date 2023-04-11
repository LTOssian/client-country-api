import React, { FC } from 'react';
import './DarkModeButton.css'
import lightMoon from '../../assets/lightMoon.svg'

const DarkModeButton: FC = () => {
    return (
        <div className="DarkModeButton">
            <img src={lightMoon} alt="Moon picto" />
            <span>Dark Mode</span>
        </div>
    )
}

export default DarkModeButton;