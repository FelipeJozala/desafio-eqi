import React from 'react';
import ButtonsGroup from '../buttons-group/ButtonsGroup';
import Label from '../label/Label';
import Input from '../input/Input';
import { StyledForm , FormItem, Row, ControlButton } from './styles';


const Form = () => {

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
        <StyledForm action="">
		<h2>Simulador</h2>
            <Row>
                <FormItem>		
                    <Label text={'Rendimentos'} hasTooltip tooltip={'lorem'}/>
                    <ButtonsGroup buttons={buttons.revenue} initial={'POS'} action={handleClick}/>
                </FormItem>
                <FormItem>
				    <Label text={'Tipos de Indexação'} hasTooltip tooltip={'lorem'} />
				    <ButtonsGroup buttons={buttons.indexType} initial={'Líquido'} action={handleClick}/>
                </FormItem>
            </Row>
			<Row>
                <FormItem>		
				    <Label htmlFor='AporteInicial' text={'Aporte Inicial'}/>
				    <Input type={'number'} id='AporteInicial' name='AporteInicial' pattern={'[0-9]{0,5}'}/>
				</FormItem>
                <FormItem>
				    <Label htmlFor='AporteMensal' text={'Aporte Mensal'} />
				    <Input type={'number'} id='AporteMensal' name='AporteMensal'/>
                </FormItem>
			</Row>
            <Row>		
				<FormItem>		
				    <Label htmlFor='prazo' text={'Prazo (em meses)'} />
				    <Input type={'number'} id='prazo' name='prazo' pattern={'[0-9]{0,5}'}/>
				</FormItem>
                <FormItem>
				    <Label htmlFor='revenu' text={'Rentabilidade'}  />
				    <Input type={'number'} id='revenu' name='revenu' pattern={'[0-9]{0,5}'}/>
                </FormItem>
			</Row>
            <Row>		
				<FormItem>		
				    <Label htmlFor='ipca' text={'IPCA (ao ano)'} />
				    <Input type={'number'} id='ipca' name='ipca' pattern={'[0-9]{0,5}'}/>
				</FormItem>
                <FormItem>
				    <Label htmlFor='cdi' text={'CDI (ao ano)'} />
				    <Input type={'number'} id='cdi' name='cdi' pattern={'[0-9]{0,5}'}/>
                </FormItem>
			</Row>
            <Row>
				<FormItem>					
					<ControlButton>Limpar Campos</ControlButton>
				</FormItem>
				<FormItem>
					<ControlButton id='Simulation' >Simular</ControlButton>  
				</FormItem>
			</Row>
        </StyledForm>
    );
};

export default Form;
