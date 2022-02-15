import React, {useContext, useEffect, useState} from 'react'
import ButtonsGroup from '../buttons-group/ButtonsGroup'
import Label from '../label/Label'
import Input from '../input/Input'
import { StyledForm , FormItem, Row, ControlButton } from './styles'
import { ApiContext } from '../../context/ApiProvider'
import { useForm, FormProvider } from 'react-hook-form'

const Form = () => {
	const initialRevenu = 'bruto'
	const initialIndex = 'pos'

	const initialValues = {
		indexType: initialIndex,
		RevenuType: initialRevenu,
		AporteInicial: '',
		AporteMensal: '',
		prazo: '',
		revenue: '',
		ipca: '',
		cdi: '',
		loaded: false
	}

	const methods  = useForm({
		defaultValues: initialValues
	})

	const [ dataManager , setDataManager ] = useState()
	const { apiIndicators, setApi } = useContext(ApiContext)

	useEffect(() => {
		let {ipca, cdi } = apiIndicators
		methods.setValue('ipca', ipca)
		methods.setValue('cdi', cdi)
		setDataManager({...initialValues, ipca: ipca , cdi: cdi})
	},[apiIndicators])

	const onSubmit = (data) => {
		console.log(data)
		let {indexType,RevenuType } = dataManager
		let params = {
			revenu:RevenuType,
			indexType:indexType
		} 
		setApi(params)
		
	}

	const handleSimulationChange = (e) => {
		e.preventDefault()
		let {name, value} = e.target
		let currentData = dataManager
		setDataManager({...currentData, [name]: value})
		methods.setValue( name, value)
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
		<FormProvider {...methods}>
			<StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
				<h2>Simulador</h2>
				<Row>
					<FormItem>		
						<Label text='Rendimentos' hasTooltip tooltip='lorem'/>
						<ButtonsGroup buttons={buttons.revenue} initial={'Bruto'} name='RevenuType' action={handleSimulationChange}/>
					</FormItem>
					<FormItem>
						<Label text='Tipos de Indexação' hasTooltip tooltip='lorem' />
						<ButtonsGroup buttons={buttons.indexType} initial={'POS'} name='indexType' action={handleSimulationChange} />
					</FormItem>
				</Row>
				<Row>
					<FormItem>		
						<Label htmlFor='AporteInicial' text='Aporte Inicial'/>
						<Input type='text' id='AporteInicial' name='AporteInicial'/>
					</FormItem>
					<FormItem>
						<Label htmlFor='AporteMensal' text='Aporte Mensal' />
						<Input id='AporteMensal' name='AporteMensal'/>
					</FormItem>
				</Row>
				<Row>		
					<FormItem>		
						<Label htmlFor='prazo' text='Prazo (em meses)' />
						<Input id='prazo' name='prazo'/>
					</FormItem>
					<FormItem>
						<Label htmlFor='revenu' text='Rentabilidade'  />
						<Input id='revenu' name='revenue'/>
					</FormItem>
				</Row>
				<Row>		
					<FormItem>		
						<Label htmlFor='ipca' text='IPCA (ao ano)' />
						<Input id='ipca'  name='ipca'/>
					</FormItem>
					<FormItem>
						<Label htmlFor='cdi' text='CDI (ao ano)' />
						<Input id='cdi'  name='cdi'/>
					</FormItem>
				</Row>
				<Row>
					<FormItem>					
						<ControlButton type='button' onClick={() => methods.reset(dataManager)}>Limpar Campos</ControlButton>
					</FormItem>
					<FormItem>
						<ControlButton type='submit' id='Simulation' >Simular</ControlButton>  
					</FormItem>
				</Row> 
			</StyledForm>
		</FormProvider>
	)
}
export default Form
