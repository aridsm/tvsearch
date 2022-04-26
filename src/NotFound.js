import React from 'react'
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.text}>
        <p>Erro 404</p>
        <span>A página não existe =(</span>
    </div>
  )
}

export default NotFound