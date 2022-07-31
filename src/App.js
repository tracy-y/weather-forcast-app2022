
import styled from 'styled-components'
import BackgroundImage from './components/BackgroundImage/BackgroundImage'
import LocalWeather from './components/LocalWeather/LocalWeather'

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
  padding: 36px 0;
`
const VerticalBorder = styled.div`
  width: 3px;
  background-color: rgba(0 0 0 0.1);
`

const App= () => (
  <Wrapper src="http://wallpaperaccess.com/full/51363.jpg">
    <Container>
     <LocalWeather/> 
      <Layout>
        <div>OtherCities</div>
        <VerticalBorder/>
        <div>Forecast</div>
      </Layout>
    </Container>
  </Wrapper>
)
export default App;
