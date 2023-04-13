import './Card.css';

interface CardProps {
    name: string;
    capital: string;
    population: number;
    flagSrc: string;
    flagAlt: string;
    region: string;
}

const Card = ({name, capital, population, flagAlt, flagSrc, region} :CardProps) => {
    return (
        <div className="Card">
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