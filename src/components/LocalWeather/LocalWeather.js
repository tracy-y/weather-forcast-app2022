// - LocalWeather: render local weather, layout of forecast and city name
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import styled from 'styled-components';
import Weather from './components/Weather/Weather';
import CityName from './components/CityName';
import { useEffect, useState } from 'react';
import axios from 'axios';

const getWeather = (id) => axios.get('http://api.openweathermap.org/data/2.5/weather', {
  params: {
    id,
    units: 'metric',
    appid: '2466213f21b4b723d341e00a430a7673',
  }
})

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 54px 86px;
  color: White;
`

const LocalWeather = () => {
  const [data, setData] = useState()

  console.log("data");

  useEffect(() => {
     getWeather('2158177').then(({ data }) => setData(data))   
  }, [])

  return (
    <BackgroundImage src = "http://wallpaperaccess.com/full/51370.jpg">
      <Layout>
        <Weather 
           temperature={data.main.temp} 
           mainWeather={data.weather[0].main} 
           humidity={data.main.humidity} 
           wind={data.wind.speed} />
        <CityName name={data.name} />
      </Layout>
        </BackgroundImage>

  )
}


export default LocalWeather