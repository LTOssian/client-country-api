import React from 'react';
import './Main.css';
import Search from '../Search/Search';

const Main = () => {
    return (
        <div className="Main">
            <Search placeHolder='Search for a country...'/>
        </div>
    )
}

export default Main