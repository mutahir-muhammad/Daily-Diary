import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('Either Blog does not exist or the DB is sleeping')
                    }
                    return res.json()
                })
                .then(data =>{
                    setData(data)
                    setError(null)
                    setIsPending(false)
                })
                .catch(err => {
                    setIsPending(false)
                    setError(err.message)
                })
        }, 800)
    },[url])

    return {data, isPending, error}
}

export default useFetch;