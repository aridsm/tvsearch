import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as SunSvg } from '../assets/sun.svg'
import { ReactComponent as MoonSvg } from '../assets/moon.svg'
import { ReactComponent as FilmSvg } from '../assets/film.svg'
import { ReactComponent as MenuSvg } from '../assets/menu.svg'
import { ReactComponent as ListSvg } from '../assets/list.svg'
import styles from './Header.module.css'
import SearchForm from './SearchForm'
import { GlobalContext } from './ThemeModeContext'
import useMedia from '../Hooks/useMedia'
import useVisibility from '../Hooks/useVisibility'
import { MenuContext } from './MenuMobileContext'

const Header = () => {

  const {mode, changeMode} = React.useContext(GlobalContext)
  const mobileGeral = useMedia('(max-width: 900px)')
  const mobileCategorias = useMedia('(max-width: 1050px)')
  const {setIsMenuCategoriasOpen} = React.useContext(MenuContext)

  const refBtnMobile = React.useRef()
  const visibilityMenuMobile = useVisibility(refBtnMobile)

  const refBtnCategorias = React.useRef()
  const visibilityMenuCategorias = useVisibility(refBtnCategorias)

  React.useEffect(() => {
    setIsMenuCategoriasOpen(visibilityMenuCategorias.isVisible)
  }, [visibilityMenuCategorias.isVisible, setIsMenuCategoriasOpen])


  function handleClickBtnGeral() {
    visibilityMenuMobile.setIsVisible(true)
  }

  function handleClickBtnCategorias() {
  visibilityMenuCategorias.setIsVisible(true)
}

  return (
    <header className={styles.header}>
      <div className={styles.container}>
      {mobileCategorias &&
      <button
      aria-label='Abrir menu categorias'
      ref={refBtnCategorias} 
      className={`${styles.menuCategorias} ${visibilityMenuCategorias.isVisible ? styles.btnCategoriasAtivo : ''}`} 
      onClick={handleClickBtnCategorias}>
      <MenuSvg />
      </button>
      }
      <Link to='/tvsearch' className={styles.logo} aria-label='Home'><FilmSvg />TVSearch</Link>
      <SearchForm
      label='Procure por um filme, programa de TV ou pessoa'
      type='search'/>
      <div className={`${styles.menu} ${mobileGeral ? styles.menuMobile : ''} ${visibilityMenuMobile.isVisible ? styles.menuGeralAtivo : ''}`}>
      <nav>
        <NavLink to='/tvsearch/filmes/todos?pagina=1'>Filmes</NavLink>
        <NavLink to='/tvsearch/series/todos?pagina=1'>Séries</NavLink>
        <NavLink to='/tvsearch/pessoas/todos?pagina=1'>Pessoas</NavLink>
      </nav>
      <button className={styles.mode} onClick={changeMode}>
        Modo: 
        {mode === 'dark'
        ?
        <p>Escuro <MoonSvg /></p>
        :
        <p>Claro <SunSvg /></p>
        }
      </button>
      </div>
      {mobileGeral &&
      <button 
      ref={refBtnMobile} 
      className={`${styles.btnMobile} ${visibilityMenuMobile.isVisible ? styles.btnMobileAtivo : ''}`} 
      aria-label='Abrir menu' 
      onClick={handleClickBtnGeral}>
        <ListSvg />
      </button>
      }
      </div>
    </header>
  )
}

export default Header