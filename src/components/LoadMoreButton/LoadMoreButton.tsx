import { Dispatch, SetStateAction } from 'react';
import './LoadMoreButton.css';

interface LoadMoreProps {
    cardsCount: number;
    onClick: Dispatch<SetStateAction<number>>
}

const LoadMore = ({cardsCount, onClick}: LoadMoreProps) => {


    return (
        <div className="LoadMoreButton" onClick={(e) => onClick( cardsCount + 8 )}>
            <span>Load More...</span>
        </div>
    )
}

export default LoadMore

//todo onclick add 4 to cardsCount