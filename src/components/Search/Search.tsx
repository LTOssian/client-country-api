import React, { Dispatch, SetStateAction, useState } from 'react';
import lightSearch from '../../assets/lightSearch.svg';
import darkSearch from '../../assets/darkSearch.svg';
import lightExpand from '../../assets/lightExpand.svg';
import darkExpand from '../../assets/darkExpand.svg';
import './Search.css';

interface SearchProps {
    currentTheme: string;
    placeHolder: string;
    searchValue: string;
    searchOnChange: Dispatch<SetStateAction<string>>;
    filterValue: string,
    filterOnChange: Dispatch<SetStateAction<string>>;
    regionsList: string[];
}

const Search = ({currentTheme, placeHolder, searchValue, searchOnChange, filterValue, filterOnChange, regionsList}: SearchProps) => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className="Search">
            <label htmlFor="search" className="inputSearch">
                <img src={!currentTheme ? lightSearch : darkSearch} alt="Search Icon" />
                <input 
                    onChange={(e) => {searchOnChange(e.target.value)}} 
                    value={searchValue} 
                    type="search" 
                    name="search" 
                    id="search" 
                    placeholder={placeHolder}
                />
            </label>

            <div className="filterSelect">
                <div className="selectedValue" onClick={(e) => setShowOptions(showOptions ? false : true)}>
                    <span>{filterValue ? filterValue : "Filter by Region"}</span>
                    <select name="regionFilter" id="regionFilter">
                        <option value="">Filter By Region</option>
                        <option value="africa">Africa</option>
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                    <img src={!currentTheme ? lightExpand : darkExpand} alt="Expand Icon" />
                </div>

                <div className="options">
                    {
                        showOptions ? regionsList.map(region => {
                            return (
                                <span className="option" key={region} onClick={(e) => {
                                    filterOnChange(e.currentTarget.textContent as string)
                                    setShowOptions(showOptions ? false : true)
                                }}>
                                    {region}
                                </span>
                            )
                        }) : null
                    }
                </div>
            </div>



            {/*  */}
        </div>
    )
}

export default Search;