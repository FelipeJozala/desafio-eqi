import styled from "styled-components";

export const InputContainer = styled.div`
    width: fit-content;
    position: relative;
`

export const Underline = styled.div`
::after {
    content: '';
    position: absolute;
    background: black;
    width: 100%;
    height: 2px;
    bottom: -2px;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 200ms ease-in;
}
`
export const StyledInput = styled.input`
    outline: none;
    border: none;
    position: relative;
    width: 300px;
    padding: 5px;
    background: transparent;
    letter-spacing: 1.7px;
    font-size: 1.3rem;

    :invalid {
        background-color: red;
    }
`