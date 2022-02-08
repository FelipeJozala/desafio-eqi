import { useState, useEffect } from 'react';
import axios from 'axios';

const useSimutation = (url) => {

    const [ data, setData ] = useState(null)
    const [ loading, setloading ] = useState(false)
    const [ error, setError ] = useState(null)

    useEffect(() => {

        if (url) { 
            setloading(true)

            axios.get(url).then((resp) => {

                setData(resp.data)

            }).catch((err) => {

                setError(err)
                
            }).finally(() => {
                setloading(false)
            })} else {
                return
            }
    },[url])

  return { data, loading, error }
  
};

export default useSimutation;


