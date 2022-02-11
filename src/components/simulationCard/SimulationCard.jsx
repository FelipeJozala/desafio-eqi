import React from 'react'
import { CardContainer } from './styles'

const SimulationCard = (props) => {
	return (
		<CardContainer>
			<h4>Valor Total Investido</h4>
			<p>{props.value}</p>
		</CardContainer>
	)
}

export default SimulationCard