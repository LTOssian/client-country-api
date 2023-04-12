import React from 'react';
import lightSearch from '../../assets/lightSearch.svg'
import darkSearch from '../../assets/darkSearch.svg'
import './Search.css'

interface SearchProps {
    currentTheme: string;
    placeHolder: string;
    searchValue: string;
    searchOnChange: (searchValue: string) => void;
    filterValue: string,
    filterOnChange: (filterValue: string) => void;
}

const Search = ({currentTheme, placeHolder, searchValue, searchOnChange, filterValue, filterOnChange}: SearchProps) => {

    return (
        <div className="Search">
            <label htmlFor="search" className="inputSearch">
                <img src={!currentTheme ? lightSearch : darkSearch} alt="Search Icon" />
                <input onChange={(e) => {searchOnChange(e.target.value)}} value={searchValue} type="search" name="search" id="search" placeholder={placeHolder}/>
            </label>

            <div className="filterSearch">
                <label htmlFor="regionFilter">Filter by Region</label>
                <select name="regionFilter" id="regionFilter">
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default Search;