import React, { createContext } from 'react'
import useApi from '../hooks/useApi'

export const ApiContext = createContext(null)

const ApiProvider = ({children}) => {
	const {ApiData, ApiError, ApiLoading, setApi } = useApi()
	return (
		<ApiContext.Provider value={{ApiData, ApiError, ApiLoading, setApi}}>
			{children}
		</ApiContext.Provider>
	)
}

export default ApiProvider
