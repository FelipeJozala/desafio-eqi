import { useState, useEffect } from 'react'
import axios from 'axios'

const useIndicateursApi = () => {

	const urlIndicateurs = 'http://localhost:8080/indicadores'

	const [ api ] = useState(urlIndicateurs)
	const [ cdi, setCdi] = useState('')
	const [ipca , setIpca] = useState('')
	const [loading, setloading] = useState(false)
	const [error, setError] = useState('')
	

	useEffect(() => {

		let isCancelled = false
		
		const fetchData = async (url) => {
			if (url === null) {
				return
			} else if (!isCancelled) { 
				setloading(true)
				await axios
					.get(url)
					.then((resp) => {
						setCdi(resp.data[0].valor)
						setIpca(resp.data[1].valor)
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
	},[])

	return { cdi, ipca, error, loading }
}

export default useIndicateursApi
