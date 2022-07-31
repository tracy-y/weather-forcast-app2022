// - App render background image and layout of local weather , other cities and forecast 

import styled from 'styled-components';

const BackgroundImage = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-image: url(../public/51367.jpg);
  background-size:cover
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  border-radius: 32px;
  box-shadow: 0 0 16px rgb(0 0 0 / 50%)
  background-color: white;
  width: 80px;
`
const App= () => (
  <BackgroundImage>
    <Container>
      Weather App
    </Container>
  </BackgroundImage>
)
export default App;
