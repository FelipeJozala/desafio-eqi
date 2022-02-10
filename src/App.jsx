import React from 'react'
import { ThemeProvider } from 'styled-components'
import SimProvider from './context/SimProvider'
import GlobalStyle from './styles/global'
import { LightTheme } from './styles/themes/themes'
import Form from './components/form/Form'
import SimulationCardGrid from './components/simulationCardGrid/SimulationCardGrid'

function App() {
	
	return (
		<SimProvider>
			<ThemeProvider theme={LightTheme}>
				<GlobalStyle />
				<h1>Simulador de Investimentos</h1>
				<main>
					<Form />
					<aside>
						<h2>Resultados da simulação</h2>
						<SimulationCardGrid/>
					</aside>
				</main>
			</ThemeProvider>
		</SimProvider>
	)
}

export default App
