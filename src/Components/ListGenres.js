import React from 'react'
import { Link } from 'react-router-dom'
import { GET_GENRES} from '../Api'
import useFetch from '../Hooks/useFetch'
import Loading from './Helper/Loading'
import Error from './Helper/Error'


const ListGenres = ({type, title, pathName}) => {

    const {data, error, loading, request} = useFetch()

    React.useEffect(() => {
      async function fetchData() {
        const {url} = GET_GENRES(type)   
        await request(url)
      }
      fetchData()
    }, [request, type])

if(error) return <Error />
if(loading) return <Loading />
if(data)
  return (
    <section>
        <p>{title}</p>
        <nav>
        {data.genres.map(item => <Link to={`${pathName}/todos?pagina=1&categoria=${item.id}`} key={item.name}>{item.name}</Link>)}      
        </nav>
    </section>
  )
}

export default ListGenres