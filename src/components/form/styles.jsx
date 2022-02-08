import styled from "styled-components";

export const StyledForm = styled.form`
    width: 100%;

    @media only screen and (min-width: 768px) {
        padding-top: 30px;
        max-width: 40vw;
        min-width: fit-content;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
    justify-content: center;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        width: 40vw;
        justify-content: center;
    }
`

export const FormItem = styled.div`
    
    width: 80%;
    margin: 0 auto;


    @media only screen and (min-width: 768px) {
        width: 35%;
        min-width: 237px;
    }
`

export const FormControls = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-bottom: 20px;
    justify-content: center;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        width: 100%;
        justify-content: flex-start;
    }
`
export const ControlItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        width: 100%;
        justify-content: center;
    }
`

export const ControlButton = styled.button`
    background: ${props => props.id === 'Simulation' ? props.theme.primary : null };
    font-size: 1.4rem;
    width: 75%;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;

    :hover {
        background: ${props => props.theme.secundary};
    } 
`