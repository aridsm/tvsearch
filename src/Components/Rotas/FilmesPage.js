import React from 'react'
import GeneralInfos from './PageInfos/GeneralInfos'
import Credits from './PageInfos/Credits'
import MoreInfos from './PageInfos/MoreInfos'
import Trailer from './PageInfos/Trailer'
import { GET_PROG_BY_ID } from '../../Api'
import useFetch from '../../Hooks/useFetch'
import Loading from '../Helper/Loading'
import { useParams } from 'react-router-dom'
import Error from '../Helper/Error'
import Head from '../Helper/Head'

const FilmesPage = () => {

  const {request, data, loading, error} = useFetch()
  const param = useParams()

  React.useEffect(() => {
    async function fetchData() {
    const {url} = GET_PROG_BY_ID(param.id, 'movie')
    await request(url)
    }
    fetchData()
  }, [request, param])


  if (error) return <Error />
  if (loading) return <Loading />
  if (data)
  return (
    <>
    <main className='pagesContainer'>
      <Head title={`Filmes | ${data.title}`} description={data.title} />
      <GeneralInfos
      img={data.poster_path}
      genres={data.genres}
      time={data.runtime}
      title={data.title}
      tagline={data.tagline}
      date={data.release_date}
      vote={data.vote_average}
      overview={data.overview}
      />
      <Credits type='movie' linkCredits='pessoas'/>
      <Trailer type='movie'/>
      <MoreInfos 
      originalTitle={['Título original', data.original_title]}
      language={['Língua original', data.original_language]}
      revenue={['Ganhos', `$${data.revenue}`]}
      budget={['Gastos', `$${data.budget}`]}
      productionCompanies={['Companias de produção', data.production_companies]}
      productionCountries={['País(es) de produção', data.production_countries]}
      link={['Site oficial', data.homepage]}
      status={['Status', data.status]}
      />
      
    </main> 
    <aside>
      
    </aside>
    </>
  )
}

export default FilmesPage