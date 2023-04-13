import { Dispatch, SetStateAction } from 'react';
import './LoadMoreButton.css';

interface LoadMoreProps {
    cardsCount: number;
    onClick: Dispatch<SetStateAction<number>>
    countryLength: number;
}

const LoadMore = ({cardsCount, onClick, countryLength}: LoadMoreProps) => {


    return countryLength > cardsCount ? (
        <div className="LoadMoreButton" onClick={(e) => onClick( cardsCount + 8 )}>
            <span>Show More...</span>
        </div>
    ) : null}

export default LoadMore
