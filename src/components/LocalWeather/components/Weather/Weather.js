// - Weather: render weather, layout of temperature, main weather, humidity and wind

import Temperature from "../../../Temperature/Temperature"
import styled from "styled-components"
import WeatherItem from "./Components/WeatherItem"


const Wrapper = styled.div`
  text-align: center;
`;

const StyledTemperature = styled(Temperature)`
  color: white;
  font-size: 5rem;
`;

const MainWeather = styled.div`
  color: rgba(255, 255, 225, 0.7)
  font-size: 1.5rem;
  letter-spacing: 5px;
  margin-top: 0.25rem;
 `;

const VerticalDivider = styled.div`
  margin: 0 2rem;
  width: 2px;
  background-color: rgba(255, 255, 225, 0.7);
`;

const HumidityAndWind = styled.div`
  display: flex;
  margin-top: 3em;
  background-color: rgba(255, 255, 225, 0.7);
`;

const Weather = () => (
    <Wrapper> 
    <StyledTemperature value="11.81"/> 
    <MainWeather>Rain</MainWeather>
    <div>
      <WeatherItem />
      <VerticalDivider />
      <WeatherItem />
    </div>
    </Wrapper> 
   )

export default Weather