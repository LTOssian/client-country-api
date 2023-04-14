import { Dispatch, SetStateAction } from 'react';
import './Card.css';

interface CardProps {
    name: string;
    capital: string;
    population: string;
    flagSrc: string;
    flagAlt: string;
    region: string;
    setCardPage: Dispatch<SetStateAction<string>>;
}

const Card = ({name, capital, population, flagAlt, flagSrc, region, setCardPage} :CardProps) => {
    return (
        <div className="Card" onClick={() => {setCardPage(name)}}>
            <div className="flagContainer" style={{backgroundImage:`url(${flagSrc})`}} aria-label={flagAlt}>
            </div>
            <div className="infoContainer">
                <h3 className="title">{name}</h3>
                <div className="smallerInfo">
                    <h4>Population: <span>{population}</span></h4>
                    <h4>Region: <span>{region}</span></h4>
                    <h4>Capital: <span>{capital}</span></h4>
                    
                </div>
            </div>
        </div>
    )
}

export default Card;