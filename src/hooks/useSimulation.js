import { useState, useEffect } from 'react'
import axios from 'axios'

const useSimulation = (dataUrl) => {
	const [data, setData] = useState(null)
	const [loading, setloading] = useState(false)
	const [error, setError] = useState('')

	useEffect(() => {
		const fetchData = async (url) => {
			setloading(true)

			axios
				.get(url)
				.then((resp) => {
					setData(resp.data)
				})
				.catch((err) => {
					setError(err)
				})
				.finally(() => {
					setloading(false)
				})
		}

		fetchData(dataUrl)
	}, [dataUrl])

	return { data, error, loading }
}

export default useSimulation
