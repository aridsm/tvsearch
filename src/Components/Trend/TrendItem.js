import React from 'react'
import { Link } from 'react-router-dom'
import { GET_TRENDS } from '../../Api'
import useFetch from '../../Hooks/useFetch'
import Loading from '../Helper/Loading'
import Error from '../Helper/Error'
import styles from './TrendItem.module.css'

const TrendItem = ({ type, title, link }) => {

  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    async function fetchData() {
      const { url } = GET_TRENDS(type)
      await request(url)
    }
    fetchData()
  }, [request, type])

  if (error) return <Error />
  if (loading) return <Loading />
  if (data)
    return (
      <article className={styles.articleItem}>
        <p className={styles.title}>{title}</p>
        <Link to={`${link + data.results[0].id}`}>
          <img src={`https://image.tmdb.org/t/p/w500/${data.results[0].poster_path || data.results[0].profile_path}`} alt={data.results[0].title || data.results[0].name} />
          <p>{data.results[0].title || data.results[0].name}</p>
          {
            data.results[0].release_date &&
            <p className={styles.date}>{data.results[0].release_date.slice(0, 4)}</p>
          }
          {
            data.results[0].first_air_date &&
            <p className={styles.date}>{data.results[0].first_air_date.slice(0, 4)}</p>
          }
        </Link>
      </article>
    )
  else return null
}

export default TrendItem