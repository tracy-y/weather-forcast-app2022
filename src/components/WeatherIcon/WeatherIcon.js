

const WeatherIcon = ({ value, description, className }) => (
  <img alt={description} src={`https://openweathermap.org/img/wn/${value}.png`} />
    )

export default WeatherIcon 