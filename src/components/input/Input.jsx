import React from 'react'
import { StyledInput, Underline, InputContainer } from './styles'

const Input = ({ name ,...rest}) => {
	return (
		<InputContainer>
			<Underline>
				<StyledInput  name={name} {...rest} />
			</Underline>
		</InputContainer>
	)
}

export default Input