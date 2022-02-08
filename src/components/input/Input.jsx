import React from 'react';
import { StyledInput, Underline, InputContainer } from './styles';

const Input = ( props ) => {
    return (
        <InputContainer>
            <Underline>
                <StyledInput {...props} />
            </Underline>
        </InputContainer>
    );
};

export default Input