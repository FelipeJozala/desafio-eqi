import React from 'react';
import Tooltip from '../tooltip/Tooltip';
import { LabelContainer } from './styles';

const Label = ( props ) => {
  	return ( 
      	<LabelContainer>
		  	<label>{props.text}</label>
			{props.hasTooltip ? <Tooltip tooltip={props.tooltip}/> : null }
    	</LabelContainer>
  	)};

export default Label;
