import React from 'react'
import styles from './GeneralInfos.module.css'

const GeneralInfos = ({img, genres, time, title, tagline, date, vote, overview}) => {


  return (
    <section className={styles.generalInfos}>
      {img ?
      <div className={styles.img}><img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title} /></div>
      : <div className='noImage'>?</div>}
        <div className={styles.avaliacao}>
          <p>Avaliações dos usuários</p>
            <div>
                <span>{vote * 10}%</span>
            </div>
        </div>
        <div className={styles.infos}>
            <header className={styles.header}>
                <span>{date.slice(0, 4)}</span>
                <h1>{title}</h1>
                {tagline && <p>{tagline}</p>}
            </header>
            <span className={styles.datetime}>
                <time className={styles.date}>{date.slice(8, 10)}/{date.slice(5, 7)}/{date.slice(0, 4)}</time>
               {time.length && <time>{time} min</time>}
            </span>
            <span className={styles.genres}>
                {genres.map(item => <p key={item.name}>{item.name}</p>)}
            </span>
          {overview ? <p>{overview}</p> : <p>Não há descrição para este programa</p>} 
        </div>
    </section>
  )
}

export default GeneralInfos