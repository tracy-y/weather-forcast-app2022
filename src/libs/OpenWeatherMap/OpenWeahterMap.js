import axios from 'axios';

const get = ({
    path,
    params,
}) => axios.get(`http://api.openweathermap.org/data/2.5/${path}`, {
  params: {
    units: 'metric',
    appid: '2466213f21b4b723d341e00a430a7673',
    ...params
  }
})

const OpenWeatherMap = {
    get,
}

export default OpenWeatherMap