import React from 'react'
import styles from './Home.module.css'
import {ReactComponent as LogoImg} from '../assets/logotmdb.svg'
import TrendItem from './Trend/TrendItem'
import Head from './Helper/Head'

const Home = () => {

  return (
    <main className={`${styles.home} grid2 marginTop`}>
      <Head title='Home' description='Home' />
      <div className={styles.container}>
        <h1>Filmes,<br /> Programas e <br />Personalidades da TV</h1>
        <p className={styles.api}>API: <a href='https://www.themoviedb.org/' aria-label='themoviedb'><LogoImg /></a></p>
      </div>
      <aside className={styles.topdia}>
        <p className='miniTitle'>Top do dia</p>
        <div className={styles.containerTrends}>
        <TrendItem type='movie' title='Filmes' link='filmes/todos/'/>
        <TrendItem type='tv' title='Séries de TV' link='series/todos/' />
        <TrendItem type='person' title='Pessoas' link='pessoas/todos/'/>
        </div>
      </aside>
    </main>
  )
}

export default Home