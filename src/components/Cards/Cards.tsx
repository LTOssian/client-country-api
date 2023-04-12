import React, { Dispatch, SetStateAction } from 'react';
import './Cards.css'
interface CardsProps {
    isLoading: boolean;
    isError: boolean;
    onClick: Dispatch<SetStateAction<boolean>>;
}

const Cards = ({isLoading, isError, onClick}: CardsProps) => {

    return (
        <div className="Cards">
            {isError 
                ?<h2 className="errorTitle">An error occured... Please reload</h2> 
                : isLoading 
                ?<h2 className="loadingTitle">Loading data...</h2>
                : null
            }
        </div>
    )
}

export default Cards;

