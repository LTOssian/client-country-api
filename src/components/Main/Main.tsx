import React, { useState } from 'react';
import './Main.css';
import Search from '../Search/Search';

const Main = () => {
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('');

    return (
        <div className="Main">
            <Search 
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