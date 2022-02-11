import React, { useContext } from 'react'
import { ApiContext } from '../../context/ApiProvider'
import SimulationCardGrid from '../simulationCardGrid/SimulationCardGrid'
import SimulationChart from '../simulationChart/SimulationChart'

const Simulation = () => {

	const { ApiData } = useContext(ApiContext)
	if (ApiData !== null ) {
		return (
		
			<aside>
				<h2>Resultados da simulação</h2>
				<SimulationCardGrid/>
				<SimulationChart/>
			</aside>
		)
	} else {
		return ( 
			<> 
			</>
		)
	}
}

export default Simulation