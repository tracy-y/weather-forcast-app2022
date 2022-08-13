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

const LocalWeather = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

     getWeather('2158177').then(({ data }) => {
      setData(data)
      setLoading(false)
    }) 
  }, []) 
  
  if(loading) {
    return <div>Loading...</div>
  }

  return ( 
    <BackgroundImage src = "http://wallpaperaccess.com/full/51370.jpg">
      <Layout>
        <Weather 
           data={data} />
        <CityName name={data.name} />
      </Layout>
        </BackgroundImage>

  )
}


export default LocalWeather