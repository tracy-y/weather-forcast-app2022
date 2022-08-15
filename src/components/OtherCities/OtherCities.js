import { useEffect, useState } from "react";
import getWeathers from "../../apis/getWeather/getWeathers/getWeathers";
import Section from "../Section";
import CityWeather from "./Components/CityWeather";

const OtherCities = () => {
 const[data, setData] = useState()
 const[loading, setLoading] = useState(true)

useEffect(() => {
  getWeathers(['2158177', '2147714', '2174003', '2063523']).then((res) => {
    setData(res.data)
    setLoading(false)
  })
},[])

  if(loading) {
    return <div>Loading...</div>
  }

    return (
        <Section title="Other Cities">
            {data.list.map((
               { id, name, main:{ temp }, weather: [weather]}
            ) => (
                <CityWeather key={id} name={name} temperature={temp} weather={weather} />
            ))}
        </Section>
    )
}

export default OtherCities
  