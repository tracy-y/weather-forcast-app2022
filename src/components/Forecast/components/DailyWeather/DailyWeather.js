import styled from 'styled-components'
import Temperature from '../../../Temperature/Temperature'
import WeatherIcon from '../../../WeatherIcon/WeatherIcon'

const Wrapper = styled.div`
   text-align: center;
   font-size: 1rem;

 & ~ & {
    margin-left: 2rem;
 }
`
const StyledWeatherIcon = styled(WeatherIcon)`
  height: 70px;
  width: 70px;
`

const DailyWeather = ({ time, weather, temperature }) =>(
    <Wrapper>
        <div>{cnt.dt_txt}</div>
        <StyledWeatherIcon value={weather.icon} description={weather.description}/>
        <div>
        <Temperature value={temperature} />
        </div>
    </Wrapper>
  )


export default DailyWeather