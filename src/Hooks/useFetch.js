import React from 'react'

const useFetch = () => {

    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    const request = React.useCallback( async (url) => {

            let response;
            let json;
            try {
            setLoading(true)
            setError(null)
            response = await fetch(url)
            json = await response.json();
            if (!response.ok) throw new Error('Dados inválidos')
            } catch(err) {
            json = null;
            setError(err)
            } finally {
            setLoading(null)
            setData(json)
            return {response, json}
            }
            
    }, [])

  return { data, error, loading, request, setData }
}

export default useFetch