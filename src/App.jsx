import React from 'react'
import { ThemeProvider } from 'styled-components'
import ApiProvider from './context/ApiProvider'
import GlobalStyle from './styles/global'
import { LightTheme } from './styles/themes/themes'
import Form from './components/form/Form'
import Simulation from './components/simulation/Simulation'

function App() {

	return (
		<ApiProvider>
			<ThemeProvider theme={LightTheme}>
				<GlobalStyle />
				<h1>Simulador de Investimentos</h1>
				<main>
					<Form />
					<Simulation/>
				</main>
			</ThemeProvider>
		</ApiProvider>
	)
}

export default App