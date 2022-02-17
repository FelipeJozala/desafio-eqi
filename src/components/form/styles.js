import styled from 'styled-components'

export const StyledForm = styled.form`
  width: 100%;

  @media only screen and (min-width: 768px) {
    padding-top: 30px;
    width: fit-content;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: fit-content;
    justify-content: flex-start;
    margin-left: 10px;
  }
`

export const FormItem = styled.div`
  width: 80%;

  @media only screen and (min-width: 768px) {
    width: 35%;
    margin-right: 100px;
    min-width: 237px;
  }
`

export const ControlButton = styled.button`
  background: ${(props) =>
		props.id === 'Simulation' ? props.theme.primary : null};
	border: ${(props) =>
		props.id === 'Simulation' ? 'none' : '1px solid black'};
  font-size: 1.4rem;
  width: 100%;
  padding: 10px;
  margin-top: 40px;
  border-radius: 10px;

  @media only screen and (min-width: 768px) {
    width: 100%;
  
		:hover {
    	background: ${(props) => props.theme.secundary};
  	}
	}

  
`
export const Error = styled.div`
	padding-top: 5px;
	color: red;
	font-size: 13px;
	width: fit-content;
`