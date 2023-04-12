import React, { useState } from 'react';
import './Main.css';
import Search from '../Search/Search';
interface MainProps {
    currentTheme: string;
}
const Main = ({currentTheme}: MainProps) => {
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('');

    return (
        <div className="Main">
            <Search 
                currentTheme={currentTheme}
                placeHolder='Search for a country...' 
                searchValue={searchValue} 
                searchOnChange={setSearchValue}
                filterValue={filterValue}
                filterOnChange={setFilterValue}
            />
        </div>
    )
}

export default Main