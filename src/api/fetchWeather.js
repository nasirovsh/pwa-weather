import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_KEY = 'e13a2ea2e9ca7853f40a467d71f469f2';

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
        q: query,
        units: 'metric',
        APPID: API_KEY,
        }
    }
  );

  return data;
}
