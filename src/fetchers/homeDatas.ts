import axios from "axios";

interface HomeData {
    name: {
        common: string;
        official: string;
        nativeName:{
            eng: {
                official: string;
                common: string;
            };
        };
    };
    currencies: {

    };
    capital: Array<string>;
    region: string;
    population: number;

}

export const homeCountriesData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,region,population,capital,currencies");
    const countriesData:HomeData[] = response.data

    return countriesData;
}