
import React, {useContext, useEffect, useState} from 'react'
import ButtonsGroup from '../buttons-group/ButtonsGroup'
import Label from '../label/Label'
import Input from '../input/Input'
import { StyledForm , FormItem, Row, ControlButton } from './styles'
import { ApiContext } from '../../context/ApiProvider'

const Form = () => {
	
	const [ inputData, setInputData ] = useState()
	const { apiCdi, apiIpca, setApi } = useContext(ApiContext)

	const initialRevenu = 'bruto'
	const initialIndex = 'pos'
	
	const initialValues = {
		indexType: initialIndex,
		RevenuType: initialRevenu,
		AporteInicial: '',
		AporteMensal: '',
		prazo: '',
		revenue: '',
		ipca: apiIpca,
		cdi: apiCdi
	}
	
	useEffect(() => {
		const handleLoadingData = async () =>{
			setInputData(initialValues)
		} 
		handleLoadingData()
	},[])

	const handleSubmit = (e) => {
		e.preventDefault()
		let {indexType,RevenuType } = inputData
		let params = {
			revenu:RevenuType,
			indexType:indexType
		} 
		setApi(params)
			
	}

	const handleChange = (e) => {
		e.preventDefault()
		const {name, value} = e.target
		setInputData({...inputData,[name]:value})
	}

	const handleFormReset = () => {
		setInputData(initialValues)
		setApi(null)
	}

	const handleCurrencyMask = (value) => {
		const formatter = new Intl.NumberFormat('pt-br', {
			style: 'currency',
			currency: 'BRL',
		})
		let formatedCurrency = null
		formatedCurrency = formatter.format(value)
		return formatedCurrency
	}

	const handlePercentageMask = (value) => {
		let formatedPercentage = null
		formatedPercentage = `${value}%`
		return formatedPercentage
	}

	const handleOnFocusReset = (e) => {
		e.target.value = ''
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
					<Label text='Rendimentos' hasTooltip tooltip='lorem'/>
					<ButtonsGroup buttons={buttons.revenue} initial={'Bruto'} name='RevenuType' action={handleChange}/>
				</FormItem>
				<FormItem>
					<Label text='Tipos de Indexação' hasTooltip tooltip='lorem' />
					<ButtonsGroup buttons={buttons.indexType} initial={'POS'} name='indexType' action={handleChange}/>
				</FormItem>
			</Row>
			<Row>
				<FormItem>		
					<Label htmlFor='AporteInicial' text='Aporte Inicial'/>
					<Input type='text' id='AporteInicial' name='AporteInicial' onChange={handleChange} onFocus={handleOnFocusReset} onBlur={(e) => {
						const { value } = e.target
						e.target.value = handleCurrencyMask(value)
					}}/>
				</FormItem>
				<FormItem>
					<Label htmlFor='AporteMensal' text='Aporte Mensal' />
					<Input id='AporteMensal' name='AporteMensal' onChange={handleChange} onFocus={handleOnFocusReset} onBlur={(e) => {
						const { value } = e.target
						e.target.value = handleCurrencyMask(value)
					}}/>
				</FormItem>
			</Row>
			<Row>		
				<FormItem>		
					<Label htmlFor='prazo' text='Prazo (em meses)' />
					<Input id='prazo'onChange={handleChange} onFocus={handleOnFocusReset} name='prazo'/>
				</FormItem>
				<FormItem>
					<Label htmlFor='revenu' text='Rentabilidade'  />
					<Input id='revenu' onChange={handleChange} onFocus={handleOnFocusReset} name='revenue' onBlur={(e) => {
						const { value } = e.target
						e.target.value = handlePercentageMask(value)
					}}/>
				</FormItem>
			</Row>
			<Row>		
				<FormItem>		
					<Label htmlFor='ipca' text='IPCA (ao ano)' />
					<Input id='ipca' onChange={handleChange} onFocus={handleOnFocusReset} name='ipca' value={apiIpca} onBlur={(e) => {
						const { value } = e.target
						e.target.value = handlePercentageMask(value)
					}}/>
				</FormItem>
				<FormItem>
					<Label htmlFor='cdi' text='CDI (ao ano)' />
					<Input id='cdi' onChange={handleChange} onFocus={handleOnFocusReset} name='cdi' value={apiCdi} onBlur={(e) => {
						const { value } = e.target
						e.target.value = handlePercentageMask(value)
					}} />
				</FormItem>
			</Row>
			<Row>
				<FormItem>					
					<ControlButton type='reset' onClick={handleFormReset}>Limpar Campos</ControlButton>
				</FormItem>
				<FormItem>
					<ControlButton type='submit' id='Simulation' >Simular</ControlButton>  
				</FormItem>
			</Row> 
		</StyledForm>
		
	)
	
}
export default Form
