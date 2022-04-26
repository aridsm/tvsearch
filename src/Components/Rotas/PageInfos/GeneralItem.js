import React from 'react'
import { Link } from 'react-router-dom'
import styles from './GeneralItem.module.css'

const GeneralItem = ({title, vote, date, img, rule, id}) => {

  const urllocation = window.location.pathname

  return (
    <Link className={styles.item} to={`${urllocation}/${id}`}>
        <div className={styles.divImg}>
          <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={title}/>
        </div>
        <p className={styles.title}>{title}</p>
        {vote && <p className={`${styles.vote} ${vote > 7 ? 'good' : vote >= 5 ? 'medium' : vote > 0 ? 'bad' : 'null'}`}>{vote}</p>}
        {date && <p className={styles.date}>{date.slice(0, 4)}</p>}
        {rule && <p className={styles.date}>{rule}</p>}
    </Link>
  )
}

export default GeneralItem