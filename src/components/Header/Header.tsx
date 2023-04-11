import React, { FC } from 'react';
import './Header.css'
import DarkModeButton from '../DarkModeButton/DarkModeButton';

const Header: FC = () => {
    return (
        <div className="Header">
            <h1>Where in the world?</h1>
            <DarkModeButton />
        </div>
    )
}

export default Header;