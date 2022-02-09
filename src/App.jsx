import React from 'react'
import { ThemeProvider } from 'styled-components'
import SimProvider from './context/SimProvider'
import GlobalStyle from './styles/global'
import LightTheme from './styles/themes/themes'
import Form from './components/form/Form'

function App() {
	return (
		<SimProvider>
			<ThemeProvider theme={LightTheme}>
				<GlobalStyle />
				<h1>Simulador de Investimentos</h1>
				<Form />
			</ThemeProvider>
		</SimProvider>
	)
}

export default App
