import React from 'react'
import { useState } from 'react/cjs/react.development'
import info from '../../asset/img/info.png'
import { Img, ImgContainer, TooltipCard, TooltipContainer } from './styles'

function Tooltip({ tooltip }) {

	const [ showTooltip, setTooltip ] = useState(false)

	return ( 
		<TooltipContainer onClick={()=> setTooltip(!showTooltip)}>
			<ImgContainer>
				<Img src={info} alt="?" />
			</ImgContainer>
			<TooltipCard tooltip={showTooltip}>
				<p>{tooltip}</p>
			</TooltipCard>
		</TooltipContainer>
	)
}

export default Tooltip
