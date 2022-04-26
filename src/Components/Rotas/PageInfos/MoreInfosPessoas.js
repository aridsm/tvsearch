import React from 'react'
import styles from './Credits.module.css'

const MoreInfosPessoas = ({placebirth, birth, death, gender}) => {

  return (
    <section className={styles.infos}>
        <ul className={styles.container}>
            {placebirth && 
            <li>
                <p className={styles.name}>Local de nascimento</p>
                <p>{placebirth}</p>
            </li>
            }
            {birth &&
            <li>
                <p className={styles.name}>Data de nascimento</p>
                <p>{birth.slice(8, 10)}/{birth.slice(5, 7)}/{birth.slice(0, 4)}</p>
            </li>
            }         
            {death && 
            <li>
                <p className={styles.name}>Data de óbito</p>
                <p>{death.slice(8, 10)}/{death.slice(5, 7)}/{death.slice(0, 4)}</p>
            </li>
            }
            {gender &&             
            <li>
                <p className={styles.name}>Gênero</p>
                <p>{gender === 2 ? 'Masculino' : 'Feminino'}</p>
            </li>
            }
        </ul>
    </section>
  )
}

export default MoreInfosPessoas