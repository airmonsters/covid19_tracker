import axios from 'axios';

const url = "https://covid19.mathdro.id/api";
const daily_url = "https://covid19.mathdro.id/api/daily";
const country_url = "https://covid19.mathdro.id/api/countries";

export const fetchData = async (country) =>{
    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`
    }
    try {
        const response = await axios.get(changeableUrl);
        const modifiedData = {
            confirmed: response.data.confirmed,
            recovered: response.data.recovered,
            deaths: response.data.deaths,
            lastUpdate: response.data.lastUpdate,
        };
        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () =>{
    try {
        const response = await axios.get(daily_url)
        const modifiedData = response.data.map((dailyData) => (
            {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate,
            }
        ) )
        return modifiedData

    } catch (error) {
        
    }
}

export const fetchCountries = async ()=>{
    try {
        const response = await axios.get(country_url)
        const countries = response.data.countries
        return countries.map((country)=>country.name );
    } catch (error) {
        
    }
}
