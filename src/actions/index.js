import axios from 'axios'
const API_KEY = "4b45ddffad7e4c03b43856901e308bf9";
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},TH`;
  const request = axios.get(url);
  return(
    {
      type:FETCH_WEATHER,
      payload:request
    }
  );
}
