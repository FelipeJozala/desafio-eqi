import styled from 'styled-components'

export const GroupContainer = styled.div`
  button {
    padding: 10px 20px;
    border: 1.8px solid ${(props) => props.theme.text};
    font-weight: 500;
		position: relative;
  }
`

export const LeftButton = styled.button`
  background: ${(props) =>
		props.active ? props.theme.primary : props.theme.backgound};
  color: ${(props) =>
		props.active ? props.theme.activeText : props.theme.text};
  border-radius: 8px 0 0 8px;

	svg {
		display: ${(props) => props.active ? 'visible' : 'none'};
	}
`
export const MiddleButton = styled.button`
  background: ${(props) =>
		props.active ? props.theme.primary : props.theme.backgound};
  color: ${(props) =>
		props.active ? props.theme.activeText : props.theme.text};
  border-radius: 0px;
  border-collapse: collapse;

	svg {
		display: ${(props) => props.active ? 'visible' : 'none'};
	}
`
export const RightButton = styled.button`
  background: ${(props) =>
		props.active ? props.theme.primary : props.theme.backgound};
  color: ${(props) =>
		props.active ? props.theme.activeText : props.theme.text};
  border-radius: 0 8px 8px 0;

	svg {
		display: ${(props) => props.active ? 'visible' : 'none'};
	}
`
