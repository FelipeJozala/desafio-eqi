import styled from 'styled-components'
import NumberFormat from 'react-number-format'

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`

export const Underline = styled.div`
  ::after {
    content: '';
    position: absolute;
    background: ${(props) => props.theme.text};
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
  }
`
export const StyledInput = styled(NumberFormat)`
  outline: none;
  border: none;
  position: relative;
  width: 100%;
  padding: 5px;
  background: transparent;
  letter-spacing: 1.7px;
  font-size: 1.3rem;

  :invalid {
    background-color: red;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 20px;
  }
`
