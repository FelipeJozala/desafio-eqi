import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        display: flex;
        justify-content: center;
    }

    body {
        width: 90vw;
        background: ${props => props.theme.background};
        font-size: 16px;
        color: ${props => props.theme.text};
    }
`