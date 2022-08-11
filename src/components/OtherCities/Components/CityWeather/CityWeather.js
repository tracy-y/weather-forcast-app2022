import styled from 'styled-components'
import Temperature from '../../../Temperature/Temperature'

const Wrapper = styled.div`
 display: flex;
 
& ~ & {
    margin-top: 1rem;
} 
`
const CityName = styled.div`
  width: 100px;
  margin-right: 1rem;
`

const CityWeather = () => {
  return (
    <Wrapper>
        <CityName>Melbourne</CityName>
        <Temperature value="21"/>
        <div>WeatherIcon</div>
    </Wrapper>
     
  )
}

export default CityWeather