import styled from "styled-components";

export const LabelContainer = styled.div`
    height: fit-content;
    display: flex;
    margin-top: 20px;
    margin-bottom: 5px;
    justify-content: space-between;
    margin-right: 30px;

    @media only screen and (min-width: 768px) {
        justify-content: space-between;
        margin-right: 0;
    }
`