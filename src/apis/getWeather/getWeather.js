import OpenWeatherMap from '../../libs/OpenWeatherMap/OpenWeahterMap';

const getWeather = (id) => OpenWeatherMap.get({
  path: '/weather',
  params: {
   id,
  } 
})

export default getWeather