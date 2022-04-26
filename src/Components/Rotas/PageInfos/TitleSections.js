import React from 'react'
import { GET_GENRES } from '../../../Api'
import useFetch from '../../../Hooks/useFetch'
import Error from '../../Helper/Error'
import Loading from '../../Helper/Loading'

const TitleSections = ({type, genreId, title}) => {

    const {data, error, loading, request} = useFetch()

    React.useEffect(() => {
        if (!data) {
        async function fetchData() {
        const {url} = GET_GENRES(type)   
        await request(url)
      }
      fetchData()}
    }, [request, type, data])
  
  if(error) return <Error />
  if(loading) return <Loading />
  if (data)
  return ( 
    <h1>{title}: {data.genres.filter(({id}) => id === +genreId).map(item => <p key={item.name}>{item.name}</p>)}</h1>
  )
}

export default TitleSections