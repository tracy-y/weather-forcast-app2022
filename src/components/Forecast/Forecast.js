import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Section from '../Section'
import DailyWeather from './components/DailyWeather'
import get3HourForecast from '../../apis/get3HourForecast'
import { getDay } from 'date-fns'


const Layout = styled.div`
  margin-top: 2rem;
  display: flex;
`
const DAYS = ['SUN', 'mON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const Forecast = ({
  cityId,
}) => {
 const [data, setData ] = useState()
 const [loading, setLoading] = useState(true)

 useEffect(() => {
   get3HourForecast(cityId).then((res) => {
     setData(res.data)
     setLoading(false)
   })
 },[cityId])

 if(loading){
  return <div> Loading... </div>
 } 

const forecast = data.list.filter(({ dt_txt }) => dt_txt.endsWith('00:00:00'))

  return (
    <Section title="Forecast">    
       <Layout>
        {forecast.map((
          { dt, main: {temp}, weather: [weather] }) => (
          <DailyWeather 
            key= {dt} 
            day={DAYS[getDay(new Date(dt * 1000))]} 
            temperature={temp} 
            weather={weather} 
          /> 
        ))} 
    </Layout>
    </Section>
)
}

export default Forecast