import React, { useState } from 'react';
import { LeftButton, RightButton, MiddleButton, GroupContainer } from './styles';

const ButtonsGroup = ( props ) => {
    
    const lastButton = (props.buttons.length -1 )

    const defaultActive = props.initial

    const [ active, setActive ] = useState(defaultActive)  

    const handleActivation = (name) => {
        setActive(name)
    }

    return (
        <GroupContainer onClickCapture={props.action}>
            {props.buttons.map((button, index) => {
                switch (index) {
                    case 0:
                        return ( 
                            <LeftButton key={index} active={active === button.name} value={button.value} onClick={() => handleActivation(button.name)}>{button.name}</LeftButton>);
            
                    case lastButton:
                        return ( <RightButton key={index} active={active === button.name} value={button.value} onClick={() => handleActivation(button.name)}>{button.name}</RightButton>);
                    
                    default:
                        return ( <MiddleButton key={index} active={active === button.name} value={button.value} onClick={() => handleActivation(button.name)}>{button.name}</MiddleButton>);
                }
            
            })}
        </GroupContainer>
    );
};

export default ButtonsGroup