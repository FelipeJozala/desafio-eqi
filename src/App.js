import { ThemeProvider } from 'styled-components';
import ButtonsGroup from './components/buttons-group/ButtonsGroup';
import Label from './components/label/Label';
import SimProvider from './context/SimProvider';
import GlobalStyle from './styles/global'
import { LightTheme } from './styles/themes/themes'
import axios from 'axios';


function App() {

	const buttons = {
		revenue: [
			{name: 'PRÉ', value: 'pre'},
			{name: 'POS',value: 'pos'},
			{name: 'FIXADO',value: 'ipca'}
		],
		indexType: [
			{name: 'Bruto', value: 'bruto'},
			{name: 'Líquido',value: 'liquido'}
		]
	}

	const handleClick = (e) => {
		e.preventDefault()
		console.log(e.target.value)
	}

	return (
		<SimProvider>
		<ThemeProvider theme={LightTheme}>
		<GlobalStyle/>		
			<Label text={'Rendimentos'} hasTooltip tooltip={'lorem'}/>
			<ButtonsGroup buttons={buttons.revenue} initial={'POS'} action={handleClick}/>
			
			<Label text={'Tipos de Indexação'} hasTooltip tooltip={'lorem'} />
			<ButtonsGroup buttons={buttons.indexType} initial={'Líquido'} action={handleClick}/>
		</ThemeProvider>
		</SimProvider>
	)};

export default App;
