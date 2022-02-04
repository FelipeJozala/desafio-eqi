import React, { useState } from 'react';
import { LeftButton, RightButton, MiddleButton, GroupContainer } from './styles';

const ButtonsGroup = ( props ) => {
    
    const lastButton = (props.buttons.length -1 )

    const [ active, setActive ] = useState(props.initial)  

    return (
        <GroupContainer>
            {props.buttons.map((button, index) => {
                switch (index) {
                    case 0:
                        return ( 
                            <LeftButton key={index} active={active === index} onClick={() => setActive(index)}>{button}</LeftButton>);
            
                    case lastButton:
                        return ( <RightButton key={index} active={active === index} onClick={() => setActive(index)}>{button}</RightButton>);
                    
                    default:
                        return ( <MiddleButton key={index} active={active === index} onClick={() => setActive(index)}>{button}</MiddleButton>);
                }
            
            })}
        </GroupContainer>
    );
};

export default ButtonsGroup