import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_PROG_BY_ID } from '../../Api'
import useFetch from '../../Hooks/useFetch'
import Loading from '../Helper/Loading'
import GeneralInfos from './PageInfos/GeneralInfos'
import Credits from './PageInfos/Credits'
import MoreInfos from './PageInfos/MoreInfos'
import Trailer from './PageInfos/Trailer'
import Error from '../Helper/Error'
import Head from '../Helper/Head'

const SeriesPage = () => {
  
  const {request, data, loading, error} = useFetch()
  const param = useParams()

  React.useEffect(() => {
    async function fetchData() {
    const {url} = GET_PROG_BY_ID(param.id, 'tv')
    await request(url)
    }
    fetchData()
  }, [request, param])

  if (error) return <Error />
  if (loading) return <Loading />
  if (data)
  return (
    <main className='pagesContainer'>
      <Head title={`Séries | ${data.name}`} description={data.name} />
      <GeneralInfos
      img={data.poster_path}
      genres={data.genres}
      time={data.episode_run_time}
      title={data.name}
      date={data.first_air_date}
      vote={data.vote_average}
      overview={data.overview}
      />
      <Credits type='tv' linkCredits='pessoas'/>
      <Trailer type='tv' />
      <MoreInfos
      originalTitle={['Título original', data.original_name]}
      language={['Língua original', data.original_language]}
      productionCompanies={['Companias de produção', data.production_companies]}
      productionCountries={['País(es) de produção', data.production_countries]}
      link={['Site oficial', data.homepage]}
      status={['Status', data.status]}
      lastAir={['Último episódio lançado', `${data.last_air_date.slice(8, 10)}/${data.last_air_date.slice(5, 7)}/${data.last_air_date.slice(0, 4)}`]}
      episodes={['Número de episódios', data.number_of_episodes]}
      seasons={['Número de temporadas', data.number_of_seasons]}
      networks={['Networks', data.networks]}
      />
    </main>
  )
}

export default SeriesPage

/*
      originalTitle={['Título original', data.original_title]}
      language={['Língua original', data.original_language]}*/