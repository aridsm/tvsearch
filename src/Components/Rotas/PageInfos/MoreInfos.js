import React from 'react'
import styles from './MoreInfos.module.css'
import {ReactComponent as SvgLink} from '../../../assets/link.svg'

const MoreInfos = (props) => {

  return (
    <section>
      <h2>Informações gerais</h2>
        <ul className={styles.container}>
        {Object.entries(props).map(item =>
          item[0] === 'link'
          ? 
          <li key={item[0]}>
            <a href={item[1][1]}>Site oficial<SvgLink /></a>
          </li>
          :
          <li key={item[0]}>
          <p className={styles.title}>{item[1][0]}</p>
          {!Array.isArray(item[1][1])
          ? <p>{item[1][1]}</p>
          : item[1][1].map(value => <p key={value.name}>{value.name}</p>
          )}
          </li>
          )}
          
        </ul>
    </section>
  ) 
}

export default MoreInfos