import styled from 'styled-components'

export const Grid = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;

	@media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`