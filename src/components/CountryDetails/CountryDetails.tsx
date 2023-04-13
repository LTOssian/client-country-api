import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './CountryDetails.css';
import LightBackArrow from '../../assets/lightBackArrow.svg';
import DarkBackArrow from '../../assets/darkBackArrow.svg'
import BackButton from '../BackButton/BackButton';
import { CountryDetailsData, DetailsData } from '../../fetchers/detailsData';
import { useQuery } from 'react-query';

interface DetailProps {
    currentTheme: string;
    setCardPage: Dispatch<SetStateAction<string>>
    cardPage: string
}

const CountryDetails = ({currentTheme, setCardPage, cardPage}: DetailProps) => {
    const [countryData, setCountryData] = useState<DetailsData | undefined>();

    const {isError, isSuccess,isLoading, data} = useQuery(
        ["countryDetail", cardPage],
        () => CountryDetailsData(cardPage),
        {
            staleTime: 60000
        }
    )

    if (isError) {
        console.log("fail fail")
    }

    if (isLoading) {
        console.log("noramelemtn ca arrive")
    }

    useEffect(() => {
        if (isSuccess) {
            setCountryData(data[0])
        }
    }, [data, isSuccess])

    return (
        <div className="CountryDetails">
            <BackButton backIcon={currentTheme ? DarkBackArrow: LightBackArrow} setCardPage={setCardPage} setCountryData={setCountryData}/>
        </div>
    )
}

export default CountryDetails;