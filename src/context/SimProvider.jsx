import React, { createContext } from 'react'

export const simContext = createContext(null)

function SimProvider({children}) {
	return (
		<simContext.Provider value="">
			{children}
		</simContext.Provider>
	)
}

export default SimProvider
