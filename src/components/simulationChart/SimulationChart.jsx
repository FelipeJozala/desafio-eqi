import React, { useContext } from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { ChartContainer, ChartTitle } from './styles'
import { ApiContext } from '../../context/ApiProvider'

const SimulationChart = () => {

	const { ApiData } = useContext(ApiContext)

	const data = {
		labels: Object.keys(ApiData[0].graficoValores.comAporte),
		datasets: [
			{
				id: 'semAporte',
				label: 'Sem Aporte',
				data: Object.values(ApiData[0].graficoValores.semAporte),
				backgroundColor: 'rgb(0, 0, 0)',
			},
			{
				id: 'comAporte',
				label: 'Com Aporte',
				data: Object.values(ApiData[0].graficoValores.comAporte),
				backgroundColor: 'rgb(237, 142, 83)',
			}	
		],
	}

	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	)

	const options = {
		maintainAspectRatio: false,
		layout: {
			padding: 0
		},
		plugins: {
			legend: {
				position: 'bottom',
				labels:{
					usePointStyle: true,
					pointStyle: 'circle'
				}
			}
		},
		responsive: true,
		scales: {
			x: {
				ticks: {
					font: {
						size: 16,
						weight: 'bold'
					},
					
				},
				stacked: true,
				grid:{
					display: false,
					drawBorder: false
				},
				title:{
					display: true,
					text:'Tempo (meses)',
					font: {
						size: 16,
						weight: 'bold'
					},
				},
				
			},
			y: {
				bounds: 'data',
				ticks: {
					display: false,
				},
				stacked: true,
				display: true,
				grid:{
					display: false,
					drawBorder: false
				},
				title:{
					display: true,
					text:'Valor (R$)',
					font: {
						size: 16,
						weight: 'bold'
					},
				}
			}
		}
	}
	
	return (
		<ChartContainer>
			<ChartTitle>Projeção de Valores</ChartTitle>
			<Bar options={options} data={data}/>
		</ChartContainer>
	)
}

export default SimulationChart