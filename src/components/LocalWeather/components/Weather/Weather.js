// - Weather: render weather, layout of temperature, main weather, humidity and wind

import Temperature from "../../../Temperature/Temperature"
import styled from "styled-components"
import WeatherItem from "./Components/WeatherItem"
import { useState } from "react";


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
  margin-top: 3rem;
`;
 
const Weather = ({ temperature, mainWeather, humidity, wind, }) => {
 
  return (
    <Wrapper> 
    <StyledTemperature value={temperature}/> 
    <MainWeather>{mainWeather}</MainWeather>
      <HumidityAndWind>
        <WeatherItem title="HUMIDITY">{`${humidity} %`}</WeatherItem>
        <VerticalDivider />
        <WeatherItem title="WIND">{`${wind} K/M`}</WeatherItem>
      </HumidityAndWind>
  </Wrapper> 
  )}

export default Weather