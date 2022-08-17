import styled from 'styled-components'
import Temperature from '../../../Temperature/Temperature'
import WeatherIcon from '../../../WeatherIcon/WeatherIcon'

const Button = styled.div`
 border: 0;
 padding: 0;
 margin: 0;
 outline: 0;
 font-size: 1rem;
 text-align: left;
 background-color: transparent;
 cursor: pointer;
 display: flex;
 align-items: center;

 border-top: 2px solid transparent;
 border-bottom:  2px solid transparent;

 &:hover {
   border-bottom:2px solid rgb(0, 0, 0, 0.1)
 }
`
const CityName = styled.div`  
  width: 100px;
  margin-right: 1rem;
`

const StyledTempreture = styled(Temperature)`
  width: 4rem;
  margin-right: 1rem;
`

const StyledWeatherIcon = styled(WeatherIcon)`
  height: 30px;
  width: 30px;
`

const CityWeather = ({
  onClick,
  name,
  temperature,
  weather,
}) => {
  return (
    <Button onClick={onClick}>
        <CityName>{name}</CityName>
        <StyledTempreture value={temperature}/>
        <StyledWeatherIcon value={weather.icon} description={weather.description}/>
    </Button>
     
  )
}

export default CityWeather