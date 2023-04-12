import React from 'react';
import './Header.css'
import DarkModeButton from '../DarkModeButton/DarkModeButton';

export interface ThemeProps {
    handleTheme: () => void;
    currentTheme: string;
}

const Header = ({handleTheme, currentTheme}: ThemeProps) => {
    

    return (
        <div className="Header">
            <h1>Where in the world?</h1>

            <DarkModeButton handleTheme={handleTheme} currentTheme={currentTheme}/>
        </div>
    )
}

export default Header;