import React from 'react';
import SearchIcon from '../../assets/searchIcon.svg'
import './Search.css'

interface SearchProps {
    placeHolder: string;
}

const Search = ({placeHolder}: SearchProps) => {
    return (
        <div className="Search">
            <label htmlFor="search" className="inputSearch">
                <img src={SearchIcon} alt="Search Icon" />
                {/* <span></span> */}
                <input type="search" name="search" id="search" placeholder={placeHolder}/>
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