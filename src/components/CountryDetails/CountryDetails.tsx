import { Dispatch, SetStateAction } from 'react';
import './CountryDetails.css';
import LightBackArrow from '../../assets/lightBackArrow.svg';
import DarkBackArrow from '../../assets/darkBackArrow.svg'
import BackButton from '../BackButton/BackButton';

interface DetailProps {
    currentTheme: string;
    setCardPage: Dispatch<SetStateAction<{}>>

}

const CountryDetails = ({currentTheme, setCardPage}: DetailProps) => {
    return (
        <div className="CountryDetails">
            <BackButton backIcon={currentTheme ? DarkBackArrow: LightBackArrow} setCardPage={setCardPage}/>
        </div>
    )
}

export default CountryDetails;