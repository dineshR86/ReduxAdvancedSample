import axios from 'axios';

const API_KEY="86f58f269b92390cae163ba2ce7fa695";
//ES6 syntax for string concatenation
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url=`${ROOT_URL}&q=${city},us`;
    //We are passing the promise to the action payload
    const request=axios.get(url);

    console.log("request",request);
    // here we are sending a promise for the payload, it will be modified by the redux promise middleware before sending it to the reducers
    // Redux promise will convert the promise to an actual object
    return {
        type:FETCH_WEATHER,
        payload:request
    }
}