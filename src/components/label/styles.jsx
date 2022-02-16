import styled from 'styled-components'

export const LabelContainer = styled.div`
  height: fit-content;
  display: flex;
  margin-top: 15px;
  margin-bottom: 5px;
  justify-content: space-between;
  margin-right: 30px;

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
    margin-right: 0;
  }
`
export const StyledLabel = styled.label`
	color: ${props => props.error ? 'red' : props.theme.text};
`