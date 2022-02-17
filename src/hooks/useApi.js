import { useState, useEffect } from 'react'
import axios from 'axios'

const useApi = () => {
	const [ api, setApi ] = useState(null)
	const [data, setData] = useState(null)
	const [loading, setloading] = useState(false)
	const [error, setError] = useState('')
	
	const baseUrl = '/simulacoes'

	useEffect(() => {
		let isCancelled = false
		console.log(api)
		const fetchData = async () => {
			if (api === null || api === null) {
				return
			} else if (!isCancelled) { 
				setloading(true)
				await axios
					.get(baseUrl, {
						params: {
							tipoIndexacao: api.indexType,
							tipoRendimento: api.revenu
						}
					})
					.then((resp) => {
						setData(resp.data)
					})
					.catch((err) => {
						setError(err)
					})
					.finally(() => {
						setloading(false)
					})}
		}
		
		fetchData(api)

		return () => {
			isCancelled = true
		}
	}, [api])

	return { ApiData:data, ApiError:error, ApiLoading:loading, setApi }
}

export default useApi
