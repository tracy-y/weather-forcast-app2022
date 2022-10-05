import OpenWeatherMap from '../../libs/OpenWeatherMap/OpenWeatherMap';


// get api from a path.
const getWeather = (id) => OpenWeatherMap.get({
  path: '/weather',
  params: {
   id,
  } 
})

export default getWeather

