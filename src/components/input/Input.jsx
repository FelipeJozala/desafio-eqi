import React from 'react'
import { useFormContext } from 'react-hook-form'
import { StyledInput, Underline, InputContainer } from './styles'

const Input = ({ name ,...rest}) => {
	const { register } = useFormContext()

	return (
		<InputContainer>
			<Underline>
				<StyledInput {...register(name)} name={name} {...rest} />
			</Underline>
		</InputContainer>
	)
}

export default Input