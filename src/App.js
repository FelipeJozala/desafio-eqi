import { ThemeProvider } from 'styled-components';
import ButtonsGroup from './components/buttons-group/ButtonsGroup';
import Input from './components/input/Input';
import Label from './components/label/Label';
import logo from './logo.svg';
import GlobalStyle from './styles/global'
import { LightTheme } from './styles/themes/themes'

function App() {

	return (
		<ThemeProvider theme={LightTheme}>
			<GlobalStyle/>
			<div className='App'>
				<Label text={'Rendimentos'} hasTooltip tooltip={'lorem'} />
				<ButtonsGroup buttons={['PRÉ','POS','FIXADO']} initial={1}/>

				<Label text={'Tipos de Indexação'} hasTooltip tooltip={'lorem'} />
				<ButtonsGroup buttons={['Bruto','Líquido']} initial={1}/>

				<Input/>
			</div>
		</ThemeProvider>
	);

}

export default App;
