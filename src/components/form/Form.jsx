import React, {useContext, useEffect, useState} from 'react'
import ButtonsGroup from '../buttons-group/ButtonsGroup'
import Label from '../label/Label'
import Input from '../input/Input'
import { StyledForm , FormItem, Row, ControlButton, Error } from './styles'
import { ApiContext } from '../../context/ApiProvider'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from '../../utils/validations/ValidationSchema'

const Form = () => {
	const initialRevenu = 'bruto'
	const initialIndex = 'pos'

	const initialValues = {
		indexType: initialIndex,
		revenuType: initialRevenu,
		aporteInicial: '',
		aporteMensal: '',
		prazo: '',
		revenu: '',
		ipca: '',
		cdi: '',
	}

	const methods  = useForm({
		defaultValues: initialValues,
		resolver: yupResolver(validationSchema)
	})
	const [ errors, setErros ] = useState(methods.formState.errors)
	const [ dataManager , setDataManager ] = useState()
	const { apiIndicators, setApi } = useContext(ApiContext)

	useEffect(() => {
		let {ipca, cdi } = apiIndicators
		methods.setValue('ipca', ipca)
		methods.setValue('cdi', cdi)
		setDataManager({...initialValues, ipca: ipca , cdi: cdi})
	},[apiIndicators])

	useEffect(() => {
		setErros(methods.formState.errors)
	},[methods.formState])

	const onSubmit = async () => {
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
						<ButtonsGroup buttons={buttons.revenue} initial={'Bruto'} name='revenuType' action={handleSimulationChange}/>
					</FormItem>
					<FormItem>
						<Label text='Tipos de Indexação' hasTooltip tooltip='lorem' />
						<ButtonsGroup buttons={buttons.indexType} initial={'POS'} name='indexType' action={handleSimulationChange} />
					</FormItem>
				</Row>
				<Row>
					<FormItem>		
						<Label htmlFor='aporteInicial' text='Aporte Inicial' errors={errors}/>
						<Input type='text' id='AporteInicial' name='aporteInicial' errors={errors}/>
						<Error>{errors.aporteInicial?.message}</Error>
					</FormItem>
					<FormItem>
						<Label htmlFor='aporteMensal' text='Aporte Mensal' errors={errors} />
						<Input id='AporteMensal' name='aporteMensal' errors={errors}/>
						<Error>{errors.aporteMensal?.message}</Error>
					</FormItem>
				</Row>
				<Row>		
					<FormItem>		
						<Label htmlFor='prazo' text='Prazo (em meses)' errors={errors} />
						<Input id='prazo' name='prazo' errors={errors}/>
						<Error>{errors.prazo?.message}</Error>
					</FormItem>
					<FormItem>
						<Label htmlFor='revenu' text='Rentabilidade' errors={errors} />
						<Input id='revenu' name='revenu' errors={errors}/>
						<Error>{errors.revenu?.message}</Error>
					</FormItem>
				</Row>
				<Row>		
					<FormItem>		
						<Label htmlFor='ipca' text='IPCA (ao ano)' errors={errors} />
						<Input id='ipca'  name='ipca' errors={errors}/>
						<Error>{errors.ipca?.message}</Error>
					</FormItem>
					<FormItem>
						<Label htmlFor='cdi' text='CDI (ao ano)' errors={errors}/>
						<Input id='cdi'  name='cdi' errors={errors}/>
						<Error>{errors.cdi?.message}</Error>
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
