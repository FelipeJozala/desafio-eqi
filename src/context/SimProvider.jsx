import React, { createContext } from 'react';

export const simContext = createContext(null)

const SimProvider = ({ children }) => {

    return (
        <simContext.Provider value={''}>
            {children}
        </simContext.Provider>
    ) 
};

export default SimProvider;
