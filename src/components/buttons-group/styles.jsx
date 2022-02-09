import styled from 'styled-components'

export const GroupContainer = styled.div`
  button {
    padding: 10px 20px;
    border: 1.8px solid ${(props) => props.theme.text};
    font-weight: 500;
  }
`

export const LeftButton = styled.button`
  background: ${(props) =>
		props.active ? props.theme.primary : props.theme.backgound};
  color: ${(props) =>
		props.active ? props.theme.activeText : props.theme.text};
  border-radius: 10px 0 0 10px;
`
export const MiddleButton = styled.button`
  background: ${(props) =>
		props.active ? props.theme.primary : props.theme.backgound};
  color: ${(props) =>
		props.active ? props.theme.activeText : props.theme.text};
  border-radius: 0px;
  border-collapse: collapse;
`
export const RightButton = styled.button`
  background: ${(props) =>
		props.active ? props.theme.primary : props.theme.backgound};
  color: ${(props) =>
		props.active ? props.theme.activeText : props.theme.text};
  border-radius: 0 10px 10px 0;
`
