// - LocalWeather: render local weather, layout of forecast and city name
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import styled from 'styled-components';
import Weather from './components/Weather/Weather';
import CityName from './components/CityName';
import { useEffect, useState } from 'react';
import getWeather from '../../apis/getWeather';


const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 54px 86px;
  color: White;
`

const LocalWeather = ({
  cityId,
}) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

     getWeather(cityId).then(({ data }) => {
      setData(data)
      setLoading(false)
    }) 
  }, [cityId]) 
  
  if(loading) {
    return <div>Loading...</div>
  }

  return ( 
    <BackgroundImage src = "http://wallpaperaccess.com/full/51370.jpg">
      <Layout>
        <Weather  
           temperature={data.main.temp}
           mainWeather={data.weather[0].main}
           humidity={data.main.humidity}
           windSpeed={data.wind.speed}
           />
        <CityName name={data.name} />
      </Layout>
        </BackgroundImage>

  )
}


export default LocalWeather