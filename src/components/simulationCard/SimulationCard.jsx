import React from 'react'
import { CardContainer, P } from './styles'

const SimulationCard = (props) => {
	return (
		<CardContainer>
			<h4>{props.tittle}</h4>
			<P {...props} >{props.value}</P>
		</CardContainer>
	)
}

export default SimulationCard