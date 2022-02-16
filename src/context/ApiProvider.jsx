import React, { createContext } from 'react'
import useApi from '../hooks/useApi'
import useIndicateursApi from '../hooks/useIndicateursApi'

export const ApiContext = createContext(null)

const ApiProvider = ({children}) => {
	const {ApiData, ApiError, ApiLoading, setApi } = useApi()
	const { apiIndicators, loadingIndicators } = useIndicateursApi()
	
	return (
		<ApiContext.Provider value={{apiIndicators, loadingIndicators , ApiData, ApiError, ApiLoading, setApi }}>
			{children}
		</ApiContext.Provider>
	)
}

export default ApiProvider
