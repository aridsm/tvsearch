import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ListCredits.module.css'

const ListCredits = ({img, id, name, character, linkTo}) => {

  return (
    <Link to={linkTo} className={styles.link}>
        <div className={styles.img}> 
        {img ?
        <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={id} />
        :
        <div className='noImage little'>?</div>}
        </div>
        <p>{name}</p>
        <p className={styles.name}>Como {character}</p>
    </Link>
  )
}

export default ListCredits