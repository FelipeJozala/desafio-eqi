import styled from 'styled-components'

export const ImgContainer = styled.div`
  height: fit-content;
`

export const Img = styled.img`
  height: 20px;
`

export const TooltipCard = styled.div`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.activeText};
  padding: 10px;
  width: 200px;
  height: fit-content;
  border-radius: 10px;
  position: absolute;
  left: -150px;
  top: 20px;
  visibility: ${(props) => (props.tooltip ? 'visible' : 'hidden')};
`

export const TooltipContainer = styled.div`
  position: relative;
  width: fit-content;
  margin-left: 50px;

  @media only screen and (min-width: 768px) {
    :hover {
      cursor: pointer;

      ${TooltipCard} {
        visibility: visible;
      }
    }
  }
`
