import axios from "axios";
import { HomeData } from "./homeDatas";

export interface DetailsData extends HomeData {
    languages: string[];
    currencies: {
        [key: string]: {
            name: string;
            symbol: string
        }
    };
    subregion: string;
    tld: string[];

}

export const CountryDetailsData = async (name: string) => {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fields=name,population,region,languages,currencies,capital,subregion,tld`);

    const countryDetails: DetailsData[] = response.data 
    return countryDetails;
}