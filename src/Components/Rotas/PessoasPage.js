import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_PROG_BY_ID } from '../../Api'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import Head from '../Helper/Head'
import Loading from '../Helper/Loading'
import GeneralInfosPessoas from './PageInfos/GeneralInfosPessoas'
import KnownFor from './PageInfos/KnownFor'
import MoreInfosPessoas from './PageInfos/MoreInfosPessoas'

const PessoasPage = () => {

    const {request, data, loading, error} = useFetch()
    const param = useParams()
  
    React.useEffect(() => {
      async function fetchData() {
      const {url} = GET_PROG_BY_ID(param.id, 'person')
      await request(url)
      }
      fetchData()
    }, [request, param])


  if (error) return <Error />
  if (loading) return <Loading />
  if(data)
  return (
    <main className='pagesContainer'>
      <Head title={`Personalidades | ${data.name}`} description={data.name} />
        <GeneralInfosPessoas
        name={data.name}
        knownfor={data.known_for_department}
        biography={data.biography}
        img={data.profile_path} />

        <MoreInfosPessoas
        placebirth={data.place_of_birth}
        birth={data.birthday}
        death={data.deathday}
        gender={data.gender}
         />

        <KnownFor id={param.id} />
    </main>
  )
}

export default PessoasPage