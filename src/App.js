
import { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from './components/BackgroundImage/BackgroundImage'
import Forecast from './components/Forecast'
import LocalWeather from './components/LocalWeather/LocalWeather'
import OtherCities from './components/OtherCities/OtherCities'

const Wrapper = styled(BackgroundImage)`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  border-radius: 32px;
  overflow: auto;
  box-shadow: 0 0 16px rgb(0 0 0 / 50%);
  background-color: white;
  width: 800px;
`
const Layout = styled.div`
  display: flex;
  padding: 24px 0;
  `
const VerticalDivider = styled.div`
  width: 3px;
  background-color: rgba(0, 0, 0, 0.1);
`

const App= () => {
 const [cityId, setCityId] = useState(2147714)

  return (
    <Wrapper src="http://wallpaperaccess.com/full/51363.jpg">
      <Container>
       <LocalWeather cityId={cityId}/> 
        <Layout>
          <OtherCities currentCityId={cityId} setCurrentCityId={setCityId}/> 
          <VerticalDivider />
          <Forecast cityId={cityId} />
        </Layout>
      </Container>
    </Wrapper>
 )
}

export default App;
