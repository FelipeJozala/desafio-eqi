import React from 'react'
import SimulationCard from '../simulationCard/SimulationCard'
import { Grid } from './styles'

const SimulationCardGrid = () => {

	return (
		<Grid>
			<SimulationCard/>
			<SimulationCard/>
			<SimulationCard/>
			<SimulationCard/>
			<SimulationCard/>
			<SimulationCard/>
		</Grid>
	)
}

export default SimulationCardGrid