import React from 'react'
import GeneralItem from './GeneralItem'
import Loading from '../../Helper/Loading'
import styles from './GeneralSections.module.css'
import useFetch from '../../../Hooks/useFetch'
import ReactPaginate from 'react-paginate'
import { useSearchParams } from 'react-router-dom'
import TitleSections from './TitleSections'
import Error from '../../Helper/Error'
import useMedia from '../../../Hooks/useMedia'
import Head from '../../Helper/Head'

const GeneralSections = ({GET_API, type, title}) => {

  const {data, request, error, loading} = useFetch()
  const [searchParams, setSearchParams] = useSearchParams()
  const searchPage = searchParams.get('pagina')
  const searchGenre = searchParams.get('categoria')
  const mobile = useMedia('(max-width: 600px)')
  React.useEffect(() => {
    async function fetchData() {
      const {url} = GET_API(searchPage, searchGenre)
      await request(url)
    }
    fetchData()
  }, [request, searchPage, GET_API, searchGenre])

  async function fetchPage(page) {
    const {url} = GET_API(page)
    await request(url)
  }

  function getPage(data) {
    let page = data.selected;
    changePage(page)
  }

  async function changePage(page) {
    let currentPage = page + 1
    await fetchPage(currentPage)
    searchParams.set('pagina', currentPage)
    setSearchParams(searchParams)
  }

  if (error) return <Error />
  if (loading) return <Loading />
  if (data)
  return (
    <main className={styles.filmes}>
      <Head title={title} description={title} />
      {searchGenre
      ?
      <TitleSections type={type} genreId={searchGenre} title={title}/>
      :
      <h1>{title}</h1>
      }
      <section>
        {data && data.results.map(item =>
          <GeneralItem
          key={item.title || item.name} 
          img={item.poster_path || item.profile_path || item.backdrop_path} 
          title={item.title || item.name} 
          vote={item.vote_average} 
          date={item.release_date || item.first_air_date}
          rule={item.known_for_department}
          id={item.id} />
        )}
        <header>
        <ReactPaginate 
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={500}
          marginPagesDisplayed={1}
          pageRangeDisplayed={mobile ? 3 : 5}
          onPageChange={getPage}
          forcePage={+searchPage - 1}
          containerClassName={styles.containerPages}
          pageLinkClassName={styles.pageLink}
          pageClassName={styles.pageNumber}
          previousClassName={styles.previousPage}
          nextClassName={styles.nextPage}
          breakClassName={styles.breakPage}
          activeClassName={styles.activePage}
          activeLinkClassName={styles.activeLink}
          />
      </header>
      </section>
    </main>
  )
}

export default GeneralSections