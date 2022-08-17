import { useEffect, useState } from "react";
import getWeathers from "../../apis/getWeather/getWeathers/getWeathers";
import Section from "../Section";
import CityWeather from "./Components/CityWeather";

const OtherCities = ({
  currentCityId,
  setCurrentCityId,
  }) => {
 const[data, setData] = useState()
 const[loading, setLoading] = useState(true)

useEffect(() => {
  
 const otherCitiesId = [2158177, 2147714, 2174003, 2063523].filter((id) => id !== currentCityId)

  getWeathers(otherCitiesId)
  .then((res) => {
    setData(res.data)
    setLoading(false)
  })
},[currentCityId])

  if(loading) {
    return (<div>Loading...</div>)
  }

    return (
        <Section title="Other Cities">
            {data.list.map((
               { id, name, main: { temp }, weather: [weather] }) => (
                <CityWeather 
                  key={id} 
                  id={id} 
                  onClick={() => setCurrentCityId(id)}
                  name={name} 
                  temperature={temp} 
                  weather={weather} 
                  />
            ))}
        </Section>
    )
}

export default OtherCities
  