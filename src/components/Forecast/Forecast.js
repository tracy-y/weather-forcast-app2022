import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'
import Section from '../Section'
import DailyWeather from './components/DailyWeather'

const Layout = styled.div`
  margin-top: 2rem;
  display: flex;
//   font-size: 1rem;
`

const Forecast = () => {
  const [forecast, setForecast] = useState(
    [{id:"MON", day:"MON", temperature:"24", weather: {icon: "03d", description:"Rain"}},
    {id:"TUE", day:"TUE", temperature:"21", weather: {icon: "04d", description:"Cloud"}},
    {id:"WEN", day:"WEN", temperature:"30", weather: {icon: "01d", description:"Clear"}},
    {id:"THUR", day:"THUR", temperature:"29", weather: {icon: "01d", description:"Clear"}},
    {id:"FRI",  day:"FRI", temperature:"28", weather: {icon: "11d", description:"Thounderstorm"}},]
  )

  return (
    <Section title="Forecast">    
       <Layout>
        {forecast.map(({ id, day, temperature, weather }) => (
          <DailyWeather id= {id} day={day} temperature={temperature} weather={weather} /> 
        ))} 
    </Layout>
    </Section>
)
}

export default Forecast