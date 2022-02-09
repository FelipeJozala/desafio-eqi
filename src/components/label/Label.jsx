import React from 'react'
import Tooltip from '../tooltip/Tooltip'
import { LabelContainer } from './styles'

const Label = ( props ) => {

	let {hasTooltip, ...rest } = props

	return ( 
		<LabelContainer>
			<label {...rest}>{rest.text}</label>
			{hasTooltip ? <Tooltip tooltip={rest.tooltip}/> : null }
		</LabelContainer>
	)
}

export default Label
