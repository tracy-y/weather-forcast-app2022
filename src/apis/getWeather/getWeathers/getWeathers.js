import OpenWeatherMap from '../../libs/OpenWeatherMap/OpenWeahterMap';

const getWeathers = ( ids ) => OpenWeatherMap.get({
    path: '/group',
    params: {
     ids: ids.join(),
    }
})

export default getWeathers