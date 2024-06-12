
import  { useEffect, useState } from 'react'

type Headers = {
  "Content-Type" : string
}

const useFetch = (url:string,headers?:Headers) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null | string> (null);
  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers
        })
        
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(`Ocorreu um erro ao fazer o fetch ${error}`)
        setLoading(false)
      }
    }
    fetchData();
  },[url,headers])
  return {data,error,loading}
}

export default useFetch