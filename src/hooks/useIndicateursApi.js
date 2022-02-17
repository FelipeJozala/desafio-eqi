import { useEffect, useState } from 'react'
import axios from 'axios'

const useIndicateursApi = () => {

	const urlIndicateurs = '/indicadores'

	const [	apiIndicators , setApiIndicators] = useState({})
	const [loadingIndicators, setloadingIndicators] = useState(false)
	const [error, setError] = useState('')
	
	useEffect(() => {

		const fetchIndicators = async () => {
			
			setloadingIndicators(true)
			await axios
				.get(urlIndicateurs)
				.then((resp) => {
					setApiIndicators({cdi: resp.data[0].valor, ipca:resp.data[1].valor})
				})
				.catch((err) => {
					setError(err)
				})
				.finally(() => {
					setloadingIndicators(false)
				})}
		

		fetchIndicators()
	},[])

	return { apiIndicators, error, loadingIndicators}
}

export default useIndicateursApi
