// - LocalWeather: render local weather, layout of forecast and city name
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import styled from 'styled-components';
import Weather from './components/Weather/Weather';
import CityName from './components/CityName';
import { useState } from 'react';

const Layout = styled.div`
  display: flex;
  justify-content:space-between;
  padding: 54px 86px;
  color: White;
`
const getWeather = (id) => axios.get('http://api.openweathermap.org/data/2.5/weather', {
  params: {
    id,
    unit: 'metric',
    appid: '2466213f21b4b723d341e00a430a7673',
  }
})

const LocalWeather = () => {
  const [cityName, setCityName] = useState('Melbourne')
  const [temperature, setTempreture] = useState('11.84') 
  const [mainWeather, setMainWeather] = useState('Rains') 
  const [humidity, setHumidity] = useState('83%')
  const [wind, setWind] = useState('11.83 K/M') 

  return (
    <BackgroundImage src = "http://wallpaperaccess.com/full/51370.jpg">
      <Layout>
        <Weather 
           temperature={temperature} 
           mainWeather={mainWeather} 
           humidity={humidity} 
           wind={wind} />
        <CityName name = {cityName} />
      </Layout>
        </BackgroundImage>

  )
}


export default LocalWeather