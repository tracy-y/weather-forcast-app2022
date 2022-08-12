import { useState } from "react";
import Section from "../Section";
import CityWeather from "./Components/CityWeather";

const OtherCities = () => {
  const [weathers, setWeathers] = useState(
    [{id: "SYDNEY", name: "SYDNEY", temperature: "24", weather: { icon: "03d", description:"Rain" }},
    {id: "MELBOURNE",  name: "MELBOURNE", temperature: "21", weather: { icon: "04d", description:"Cloud" }},
    {id: "PERTH", name: "PERTH", temperature: "30", weather: { icon: "01d", description:"Clear" }},]
  )

    return (
        <Section title="Other Cities">
            {weathers.map((
               { id, name, temperature, weather}
            ) => (
                <CityWeather key={id} name={name} temperature={temperature} weather={weather} />
            ))}
        </Section>
    )
}

export default OtherCities
  