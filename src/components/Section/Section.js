import styled from "styled-components"

const Wrapper = styled.div`    
 padding: 0 48px;
` 
const Title = styled.div`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`

const Section = ({title, children}) => (
    <Wrapper>
        <Title>{title}</Title>
        <div>{children}</div>
    </Wrapper>

)

export default Section