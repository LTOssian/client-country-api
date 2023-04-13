import axios from "axios";

export interface HomeData {
    name: {
        common: string;
        official: string;
        nativeName:{
            [key: string]: {
                [key: string]: string;
            };
        };
    };
    capital: Array<string>;
    region: string;
    population: number;
    flags: {
        [key: string]: string;
    }

}

export const homeCountriesData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,region,population,capital,flags");
    const countriesData:HomeData[] = response.data

    return countriesData;
}