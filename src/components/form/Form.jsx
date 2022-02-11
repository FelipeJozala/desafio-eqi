import React, {useContext, useState} from 'react'
import ButtonsGroup from '../buttons-group/ButtonsGroup'
import Label from '../label/Label'
import Input from '../input/Input'
import { StyledForm , FormItem, Row, ControlButton } from './styles'
import { ApiContext } from '../../context/ApiProvider'
import useIndicateursApi from '../../hooks/useIndicateursApi'


const Form = () => {

	const { cdi, ipca } = useIndicateursApi()

	const { setApi } = useContext(ApiContext)
	const [ indexType, setIndexType ] = useState('pos')
	const [ revenu, setRevenu ] = useState('liquido')

	const handleIndexType = (e) => {
		e.preventDefault()
		setIndexType(e.target.value)
	}

	const handleRevenu = (e) => {
		e.preventDefault()
		setRevenu(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		let params = {
			revenu:revenu,
			indexType:indexType
		} 
		setApi(params)
	}

	const buttons = {
		revenue: [
			{name: 'Bruto', value: 'bruto'},
			{name: 'Líquido',value: 'liquido'}
		],
		indexType: [
			{name: 'PRÉ', value: 'pre'},
			{name: 'POS',value: 'pos'},
			{name: 'FIXADO',value: 'ipca'}
		]
	}

	return (
		
		<StyledForm onSubmit={handleSubmit}>
			<h2>Simulador</h2>
			<Row>
				<FormItem>		
					<Label text={'Rendimentos'} hasTooltip tooltip={'lorem'}/>
					<ButtonsGroup buttons={buttons.revenue} initial={'Bruto'} action={handleRevenu}/>
				</FormItem>
				<FormItem>
					<Label text={'Tipos de Indexação'} hasTooltip tooltip={'lorem'} />
					<ButtonsGroup buttons={buttons.indexType} initial={'POS'} action={handleIndexType}/>
				</FormItem>
			</Row>
			<Row>
				<FormItem>		
					<Label htmlFor='AporteInicial' text={'Aporte Inicial'}/>
					<Input fixedDecimalScale={true} decimalSeparator={','} decimalScale={2} prefix={'R$'} id='AporteInicial' name='AporteInicial'/>
				</FormItem>
				<FormItem>
					<Label htmlFor='AporteMensal' text={'Aporte Mensal'} />
					<Input fixedDecimalScale={true} decimalSeparator={','} decimalScale={2} prefix={'R$'} id='AporteMensal' name='AporteMensal'/>
				</FormItem>
			</Row>
			<Row>		
				<FormItem>		
					<Label htmlFor='prazo' text={'Prazo (em meses)'} />
					<Input id='prazo' name='prazo'/>
				</FormItem>
				<FormItem>
					<Label htmlFor='revenu' text={'Rentabilidade'}  />
					<Input fixedDecimalScale={true} decimalScale={2} suffix={'%'} id='revenu' name='revenu'/>
				</FormItem>
			</Row>
			<Row>		
				<FormItem>		
					<Label htmlFor='ipca' text={'IPCA (ao ano)'} />
					<Input thousandSeparator={false} decimalSeparator={','} suffix={'%'} id='ipca' name='ipca' value={ipca}/>
				</FormItem>
				<FormItem>
					<Label htmlFor='cdi' text={'CDI (ao ano)'} />
					<Input thousandSeparator={false} decimalSeparator={','} id='cdi' name='cdi' suffix={'%'} value={cdi}/>
				</FormItem>
			</Row>
			<Row>
				<FormItem>					
					<ControlButton type='reset'>Limpar Campos</ControlButton>
				</FormItem>
				<FormItem>
					<ControlButton type='submit' id='Simulation' >Simular</ControlButton>  
				</FormItem>
			</Row>
		</StyledForm>
	)
}
export default Form
