// - App render background image and layout of local weather , other cities and forecast 

import styled from 'styled-components';

const BackgroundImage = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  background-color: green;
  background-image: url(https://wallpaperaccess.com/download/hd-51367);
  background-size:cover
  display: flex;
  align-items: center;
  justify-content: center;
`

const App= () => (
  <BackgroundImage></BackgroundImage>
)
export default App;
