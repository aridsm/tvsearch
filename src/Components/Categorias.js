import React from 'react'
import styles from './Categorias.module.css'
import ListGenres from './ListGenres'
import { MenuContext } from './MenuMobileContext'

const Categorias = () => {

  const {isMenuCategoriasOpen} = React.useContext(MenuContext)

  return (
    <section className={`${styles.categorias} ${isMenuCategoriasOpen ? styles.categoriasMobile : ''}`}>
        <aside className={`${isMenuCategoriasOpen ? styles.menuMobile : ''}`}>
        <p className='miniTitle'>Categorias</p>
        <ListGenres type='movie' title='Filmes' pathName='filmes'/>
        <ListGenres type='tv' title='Séries de Tv' pathName='series'/>
        </aside>
    </section>
  )
}

export default Categorias