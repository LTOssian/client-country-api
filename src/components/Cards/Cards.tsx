import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './Cards.css'
import { HomeData } from '../../fetchers/homeDatas';
import Card from '../Card/Card';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

interface CardsProps {
    filterValue: string;
    searchValue: string;
    isLoading: boolean;
    isError: boolean;
    onClick: Dispatch<SetStateAction<boolean>>;
    data: HomeData[] | undefined;
}

const Cards = ({filterValue, searchValue,isLoading, isError, onClick, data}: CardsProps) => {
    const [cardsCount, setCardsCount] = useState(12);
    const [filteredData, setFilteredData] = useState<HomeData[] | []>([]);


    useEffect(() => {
        const selectedData = filterValue ? data?.filter(country => country.region === filterValue) : data;
        const searchedData = searchValue ? selectedData?.filter(country => (country.name.common.toLowerCase()).startsWith(searchValue.toLowerCase().trim())) : selectedData;


        setFilteredData(searchedData ? searchedData : [])
        setCardsCount(12)
    }, [data, filterValue, searchValue])

    return (
        <div className="Cards">
            {isError 
                ?<h2 className="errorTitle">An error occured... Please reload</h2> 
                : isLoading 
                ?<h2 className="loadingTitle">Loading data...</h2>
                : !filteredData?.length ? <h2  className="errorTitle">No country was found with this name...</h2>
                    :filteredData.slice(0, cardsCount).map((country) => {
                        return <Card 
                        key={country.name.official}
                        name= {country.name.common}
                        capital= {country.capital[0]}
                        population= {country.population}
                        flagSrc= {country.flags.svg}
                        flagAlt= {country.flags.alt}
                        region= {country.region} />
                    })
            }
            <LoadMoreButton 
                cardsCount={cardsCount}
                onClick={setCardsCount}
            />
        </div>
    )
}

export default Cards;

