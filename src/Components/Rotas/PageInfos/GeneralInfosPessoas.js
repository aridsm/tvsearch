import React from 'react'
import styles from './GeneralInfos.module.css'

const GeneralInfosPessoas = ({name, knownfor, biography, img}) => {
  return (
    <section className={styles.generalInfos}>
       {img ?
        <div className={styles.img}><img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={name} /></div>
      : <div className='noImage'>?</div>}

       <div className={styles.infos}>
            <header className={styles.header}>
                <h1>{name}</h1>
            </header>
            <span className={styles.known}>
                Conhecido(a) por: {knownfor}
            </span>
            {biography ? <p>{biography}</p> : <p>Não há descrição para esta pessoa</p>} 
       </div>
   </section>
  )
}

export default GeneralInfosPessoas