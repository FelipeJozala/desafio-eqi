import React from 'react'
import Tooltip from '../tooltip/Tooltip'
import { LabelContainer, StyledLabel } from './styles'

const Label = ( props ) => {

	let {hasTooltip, tooltip, text ,errors, htmlFor, ...rest } = props

	return ( 
		<LabelContainer >
			<StyledLabel {...rest} error={errors?.[htmlFor] ? true : false}>{text}</StyledLabel>
			{hasTooltip ? <Tooltip  tooltip={tooltip}/> : null }
		</LabelContainer>
	)
}

export default Label
