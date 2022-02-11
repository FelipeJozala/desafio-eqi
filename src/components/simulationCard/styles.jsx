import styled from 'styled-components'

export const CardContainer = styled.div`
	background: ${props => props.theme.card};
	height: 90px;
	width: 210px;
	text-align: center;
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 8px;
	border-radius: 5px;
	margin: 20px ;

	@media only screen and (min-width: 768px) {
    margin: 20px ;
  }
`