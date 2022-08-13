import axios from 'axios';

const getWeather = (id) => axios.get('http://api.openweathermap.org/data/2.5/weather', {
  params: {
    id,
    units: 'metric',
    appid: '2466213f21b4b723d341e00a430a7673',
  }
})

export default getWeather