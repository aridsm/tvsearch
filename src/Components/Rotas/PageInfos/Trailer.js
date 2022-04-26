import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_VIDEO } from '../../../Api'
import useFetch from '../../../Hooks/useFetch'
import Error from '../../Helper/Error'
import Loading from '../../Helper/Loading'
import styles from './Trailer.module.css'

const Trailer = ({type}) => {

    const {request, data, loading, error} = useFetch()
    const param = useParams()
  
    React.useEffect(() => {
      async function fetchData() {
        const {url} = GET_VIDEO(param.id, type)
        await request(url)
      }
      fetchData()
    }, [request, param])

  if (error) return <Error />
  if (loading) return <Loading />
  if (data && data.results.length)
  return (
    <section className={styles.video}>
      <h2>Trailer</h2>
      <iframe
      src={`https://www.youtube.com/embed/${data.results[0].key}`}
      title={data.results[0].name}
      frameBorder="0"
      width="100%" height="350" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen>
      </iframe>
    </section>
  )
  
  return null
}

export default Trailer