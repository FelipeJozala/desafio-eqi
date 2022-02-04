import React from 'react';
import { StyledInput, Underline, InputContainer } from './styles';

const Input = () => {
    return (
        <InputContainer>
            <StyledInput pattern='[0-9]'/>
            <Underline></Underline>
        </InputContainer>
    );
};

export default Input