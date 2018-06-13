import axios from 'axios';

const API_KEY="b6907d289e10d714a6e88b30761fae22";
//ES6 syntax for string concatenation
const ROOT_URL=`http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fecthWeather(city){
    const url=`${ROOT_URL}&q=${city},us`;
    //We are passing the promise to the action payload
    const request=axios.get(url);

    return {
        type:FETCH_WEATHER,
        payload:request
    }
}