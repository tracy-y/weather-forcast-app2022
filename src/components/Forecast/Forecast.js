import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Section from '../Section'
import DailyWeather from './components/DailyWeather'
import get3HourForecast from '../../apis/get3HourForecast'

const Layout = styled.div`
  margin-top: 2rem;
  display: flex;
//   font-size: 1rem;
`

const Forecast = () => {
 const [data, setData ] = useState()
 const [loading, setLoading] = useState(true)

 useEffect(() => {
   get3HourForecast('2158177').then((res) => {
     setData(res.data)
     setLoading(false)
   })
 },[])

 if(loading){
  return <div> Loading... </div>
 } 

  console.log(data)

  return (
    <Section title="Forecast">    
       <Layout>
        {data.list.map((
          { id, time, main: {temp}, weather:[weather] }) => (
          <DailyWeather key= {id} time={cnt.dt_txt} temperature={temp} weather={weather} /> 
        ))} 
    </Layout>
    </Section>
)
}

export default Forecast