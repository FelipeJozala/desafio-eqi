import styled from 'styled-components'

export const CustomSvg = styled.svg`
	height: 1em;
	padding-right: 2px;	
	position: absolute;
	left: 7px;
	fill: ${(props) => props.theme.activeText};
`