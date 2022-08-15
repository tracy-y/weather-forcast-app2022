import styled from 'styled-components'
import Temperature from '../../../Temperature/Temperature'
import WeatherIcon from '../../../WeatherIcon/WeatherIcon'

const Wrapper = styled.div`
 display: flex;
 align-items: center;
 font-size: 1rem;
`
const CityName = styled.div`  
  width: 100px;
  margin-right: 1rem;
`

const StyleTempreture = styled(Temperature)`
  width: 4rem;
  margin-right: 1rem;
`

const StyledWeatherIcon = styled(WeatherIcon)`
  height: 30px;
  width: 30px;
`

const CityWeather = ({
  name,
  temperature,
  weather
}) => {
  return (
    <Wrapper>
        <CityName>{name}</CityName>
        <StyleTempreture value={temperature}/>
        <StyledWeatherIcon value={weather.icon} description={weather.description}/>
    </Wrapper>
     
  )
}

export default CityWeather