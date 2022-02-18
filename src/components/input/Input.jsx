import React from 'react'
import { useFormContext } from 'react-hook-form'
import { StyledInput, Underline, InputContainer} from './styles'

const Input = ({ name, errors, ...rest}) => {
	const { register } = useFormContext()
	return (
		<>
			<InputContainer>
				<Underline error={errors?.[name] ? true : false}>
					<StyledInput {...register(name)} {...rest}/>
				</Underline>
			</InputContainer>
		</>
	)
}

export default Input