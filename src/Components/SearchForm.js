import React from 'react'
import { Link } from 'react-router-dom'
import { GET_SEARCH_RESULTS } from '../Api'
import { ReactComponent as SearchSvg } from '../assets/search.svg'
import useFetch from '../Hooks/useFetch'
import useMedia from '../Hooks/useMedia'
import useVisibility from '../Hooks/useVisibility'
import styles from './SearchForm.module.css'

const SearchForm = ({label, type}) => {

  const [query, setQuery] = React.useState('')
  const [isBarVisible, setIsBarVisible] = React.useState(false)
  const {data, request} = useFetch()
  const mobile = useMedia('(max-width: 500px)')
  const refSearchBar = React.useRef()
  const {isVisible, setIsVisible} = useVisibility(refSearchBar)

  const searchForQuery = React.useCallback((value) => {
    async function fetchData() {
      const {url} = GET_SEARCH_RESULTS(value)   
      await request(url)
    }
    fetchData()
  }, [request])

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setQuery(event.target.value);
    searchForQuery(event.target.value)
    setIsVisible(true)
  }

  return (
    <div className={styles.searchSection}>
    <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor={type}>{label}</label>
        <input 
        type={type} 
        name={type} 
        id={type} 
        placeholder={label}
        value={query}
        onChange={handleChange}
        className={`${isBarVisible ? styles.searchBarMobile : ''}`}
        ref={refSearchBar}
        />
        {!mobile && <SearchSvg />}
        {mobile && <button onClick={() => setIsBarVisible(!isBarVisible)} aria-label='Mostrar barra de pesquisa' className={styles.btnMostrarBarra}><SearchSvg /></button>}
     </form>
      {data && data.results && isVisible ?
      <div className={styles.searchResults}>
      <ul> 
        {data.results.filter((item, index) => index < 15)
        .map(item =>
        <li key={item.name + item.title} className={styles.itemSearch}>
         <Link
         to={`/${item.media_type === 'movie' ? 'filmes' : item.media_type === 'tv' ? 'series' : 'pessoas' }/todos/${item.id}`}>
         <p className={styles.titleSearch}>{item.name || item.title}</p>
         <p className={styles.typeSearch}>Em {item.media_type === 'movie' ? 'filmes' : item.media_type === 'tv' ? 'séries' : 'pessoas' }</p>
         </Link>
        </li>
        )
        }
      </ul>
      </div>
      : null
      }
    </div>
  )
}

export default SearchForm