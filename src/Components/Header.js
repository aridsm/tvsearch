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
  const [menuCategorias, setMenuCategorias] = React.useState(false)
  const {setIsMenuCategoriasOpen} = React.useContext(MenuContext)

  const ref = React.useRef()
  const {isVisible, setIsVisible} = useVisibility(ref)

  React.useEffect(() => {
    setIsMenuCategoriasOpen(menuCategorias)
  }, [menuCategorias, setIsMenuCategoriasOpen])

  function handleClickBtnGeral() {
    setIsVisible(true)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
      {mobileCategorias &&
      <button aria-label='Abrir menu categorias' className={styles.menuCategorias} onClick={()=> setMenuCategorias(!menuCategorias)}>
        <MenuSvg />
      </button>
      }
      <Link to='/' className={styles.logo} aria-label='Home'><FilmSvg />TVSearch</Link>
      <SearchForm
      label='Procure por um filme, programa de TV ou pessoa'
      type='search'/>
      <div className={`${styles.menu} ${mobileGeral ? styles.menuMobile : ''} ${isVisible ? styles.menuGeralAtivo : ''}`}>
      <nav>
        <NavLink to='/filmes/todos?pagina=1'>Filmes</NavLink>
        <NavLink to='/series/todos?pagina=1'>Séries</NavLink>
        <NavLink to='/pessoas/todos?pagina=1'>Pessoas</NavLink>
      </nav>
      <button className={styles.mode} onClick={changeMode}>
        Mode: 
        {mode === 'dark'
        ?
        <p>Dark <MoonSvg /></p>
        :
        <p>Light <SunSvg /></p>
        }
      </button>
      </div>
      {mobileGeral &&
      <button ref={ref} className={styles.btnMobile} aria-label='Abrir menu' onClick={handleClickBtnGeral}>
        <ListSvg />
      </button>
      }
      </div>
    </header>
  )
}

export default Header