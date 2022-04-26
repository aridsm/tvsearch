import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_CREDITS } from '../../../Api'
import useFetch from '../../../Hooks/useFetch'
import styles from './Credits.module.css'
import Loading from '../../Helper/Loading'
import ListCredits from './ListCredits'
import Error from '../../Helper/Error'

const Credits = ({type, linkCredits}) => {

    const {request, data, loading, error} = useFetch()
    const param = useParams()
  
    React.useEffect(() => {
      async function fetchData() {
        const {url} = GET_CREDITS(param.id, type)
        await request(url)
      }
      fetchData()
    }, [request, param, type])

  if (error) return <Error />
  if (loading) return <Loading />
  if (data)
  return (
    <>
    {data.crew.length ?
    <section className={styles.infos}>
        <h2>Equipe de filmagem</h2>
        <div className={styles.container}>
        {data.crew.filter(item => item.known_for_department === 'Writing' || item.known_for_department === 'Directing')
        .map(item =>
        <span key={item.credit_id}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.data}>{item.job}</p>
        </span>
        )}
        </div>
    </section>
    : null
    }
    
    {data.cast.length ?
     <section>
        <h2>Elenco principal</h2>
        <div className={styles.list}>
        {data.cast.filter((item, index) => index < 10)
        .map(item =>
        <ListCredits
        img={item.profile_path}
        key={item.credit_id}
        id={item.id}
        name={item.name}
        character={item.character}
        linkTo={`/${linkCredits}/todos/${item.id}`}
        />)
        }
        </div>
     </section>
     : null
      }
    </>

  )
  else return null
}

export default Credits 