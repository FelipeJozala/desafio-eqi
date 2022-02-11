import React, { useContext } from 'react'
import { ApiContext } from '../../context/ApiProvider'
import SimulationCard from '../simulationCard/SimulationCard'
import { Grid } from './styles'

const SimulationCardGrid = () => {
	const { ApiData } = useContext(ApiContext)
	const { aliquotaIR, ganhoLiquido, valorFinalBruto, valorFinalLiquido, valorPagoIR, valorTotalInvestido} = ApiData[0]

	return (
		<Grid>
			<SimulationCard tittle={'Valor final Bruto'} value={valorFinalBruto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}/>
			<SimulationCard tittle={'Alíquota do IR'} value={`${aliquotaIR}%`}/>
			<SimulationCard tittle={'Valor Pago em IR'} value={valorPagoIR.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}/>
			<SimulationCard isGreen tittle={'Valor Final Líquido'} value={valorFinalLiquido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}/>
			<SimulationCard tittle={'Valor Total Investido'} value={valorTotalInvestido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}/>
			<SimulationCard isGreen tittle={'Ganho Líquido'} value={ganhoLiquido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}/>
		</Grid>
	)
}

export default SimulationCardGrid