import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GET_PEOPLE } from '../../Api'
import NotFound from '../../NotFound'
import GeneralSections from './PageInfos/GeneralSections'
import PessoasPage from './PessoasPage'

const Pessoas = () => {

  return (
    <main className='grid2 minHeight marginTop'>
    <Routes>
      <Route path='/' element={<GeneralSections GET_API={GET_PEOPLE} title={'Personalidades'}/>}/>
      <Route path=':id' element={<PessoasPage />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </main>
  )
}

export default Pessoas