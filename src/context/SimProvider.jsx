import React, { createContext } from 'react';
import useSimutation from '../hooks/useSimutation';

export const simContext = createContext()

const SimProvider = ({ children }) => {

    const { simulation, setSimulation } = useSimutation(null)

    return (
        <simContext.Provider value={simulation}>
            {children}
        </simContext.Provider>
    ) 
};

export default SimProvider;
