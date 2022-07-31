// - LocalWeather: render local weather, layout of forecast and city name
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import styled from 'styled-components';
import Weather from './components/Weather/Weather';

const Layout = styled.div`
  display: flex;
  justify-content:space-between;
  padding: 64px 96px;
  color: White;
`

const LocalWeather = () => (
    <BackgroundImage src = "http://wallpaperaccess.com/full/51370.jpg">
      <Layout>
        <Weather />
        <div>CityName</div>
      </Layout>
        </BackgroundImage>
  )


export default LocalWeather