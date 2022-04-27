import React from 'react'
import { GET_PEOPLE_CREDITS } from '../../../Api'
import useFetch from '../../../Hooks/useFetch'
import ListCredits from './ListCredits'
import styles from './Credits.module.css'
import Error from '../../Helper/Error'
import Loading from '../../Helper/Loading'

const KnownFor = ({id}) => {

    const {request, data, loading, error} = useFetch()
  
    React.useEffect(() => {
      async function fetchData() {
      const {url} = GET_PEOPLE_CREDITS(id)
      await request(url)
      }
      fetchData()
    }, [request, id])

  if(error) return <Error />
  if (loading) return <Loading />
  if (data)
  return (
    <>
      <section className={styles.credits}>
        <h2>Principais participações</h2>
        {data.cast.length ?
            <section>
            <h3>Atuação</h3>
            <div className={styles.list}>
            {data.cast.filter((item, index) => index < 10)
            .map(item =>
            <ListCredits
            img={item.poster_path}
            key={item.credit_id}
            id={item.id}
            name={item.title}
            character={item.character}
            linkTo={item.media_type === 'movie' ? `/tvsearch/filmes/todos/${item.id}` : `/tvsearch/series/todos/${item.id}`}
            />)
            }
            </div>
            </section>
        : null
        }

        {data.crew.length ? 
            <section>
            <h3>Equipe de produção</h3>
            <div className={styles.list}>
            {data.crew.filter((item, index) => index < 10)
            .map(item =>
            <ListCredits
            img={item.poster_path}
            key={item.credit_id}
            id={item.id}
            name={item.title}
            character={item.department}
            linkTo={item.media_type === 'movie' ? `/tvsearch/filmes/todos/${item.id}` : `/tvsearch/series/todos/${item.id}`}
            />)
            }
            </div>
            </section>
        : null
        }
      </section>
    </>
  )
  else return null
}

export default KnownFor
