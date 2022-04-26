import React from 'react'
import styles from './Footer.module.css'
import {ReactComponent as GitHubSvg} from '../assets/github.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Projeto feito por <a href='https://github.com/aridsm'> Ariane Morelato <GitHubSvg /></a>
    </footer>
  )
}

export default Footer