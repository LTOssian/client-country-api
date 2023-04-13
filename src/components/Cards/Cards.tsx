import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './Cards.css'
import { HomeData } from '../../fetchers/homeDatas';
import Card from '../Card/Card';

interface CardsProps {
    filterValue: string,
    isLoading: boolean;
    isError: boolean;
    onClick: Dispatch<SetStateAction<boolean>>;
    data: HomeData[] | undefined;
}

const Cards = ({filterValue, isLoading, isError, onClick, data}: CardsProps) => {
    const [cardsCount, setCardsCount] = useState(12);
    const [filteredData, setFilteredData] = useState<HomeData[] | undefined>([])
    useEffect(() => {
        const filteredData = filterValue ? data?.filter(country => country.region === filterValue) : data 

        setFilteredData(filteredData)
    }, [data, filterValue, filteredData])

    return (
        <div className="Cards">
            {isError 
                ?<h2 className="errorTitle">An error occured... Please reload</h2> 
                : isLoading 
                ?<h2 className="loadingTitle">Loading data...</h2>
                : filteredData?.slice(0, cardsCount).map((country) => {
                    return <Card 
                    name= {country.name.common}
                    capital= {country.capital[0]}
                    population= {country.population}
                    flagSrc= {country.flags.svg}
                    flagAlt= {country.flags.alt}
                    region= {country.region}
                    moreCard= {setCardsCount}
                    />
                })
            }
        </div>
    )
}

export default Cards;

