import React, { useState } from 'react'
import {
	LeftButton, RightButton, MiddleButton, GroupContainer,
} from './styles'
import Checked from '../checked/Checked'

function ButtonsGroup({buttons, initial, action, ...rest}) {
	const lastButton = (buttons.length - 1)
	const defaultActive = initial

	const [active, setActive] = useState(defaultActive)

	const handleActivation = (name) => {
		setActive(name)
	}

	return (
		<GroupContainer onClickCapture={action}>
			{buttons.map((button, index) => {
				switch (index) {
				case 0:
					return (
						<LeftButton key={index} active={active === button.name} value={button.value} onClick={() => handleActivation(button.name)} {...rest}>
							<Checked/>{button.name}</LeftButton>)

				case lastButton:
					return (<RightButton key={index} active={active === button.name} value={button.value} onClick={() => handleActivation(button.name)} {...rest}>
						<Checked/>{button.name}</RightButton>)

				default:
					return (<MiddleButton key={index} active={active === button.name} value={button.value} onClick={() => handleActivation(button.name)} {...rest}>
						<Checked/>
						{button.name}</MiddleButton>)
				}
			})}
		</GroupContainer>
	)
}

export default ButtonsGroup
