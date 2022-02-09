import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
    }

    html {
        display: flex;
        justify-content: center;
    }

    body {
        width: 90%;
        background: ${props => props.theme.background};
        font-size: 1rem;
        color: ${props => props.theme.text};
    }

    h1 {
        text-align: center;
        font-size: 1.5rem;
        margin-top: 30px;
        margin-bottom: 30px;

        @media only screen and (min-width: 768px) {
            font-size: 2rem;
            margin-top: 50px;
            margin-bottom: 60px;
        }
    }
`