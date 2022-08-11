// - LocalWeather: render local weather, layout of forecast and city name
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import styled from 'styled-components';
import Weather from './components/Weather/Weather';
import CityName from './components/CityName';

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
        <CityName name = "Melbourne" />
      </Layout>
        </BackgroundImage>
  )


export default LocalWeather