import React from 'react';
import SearchIcon from '../../assets/searchIcon.svg'
import './Search.css'

const Search = () => {
    return (
        <div className="Search">
            <div className="inputSearch">
                <img src={SearchIcon} alt="Search Icon" />
                <input type="search" name="search" id="search" />
            </div>

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