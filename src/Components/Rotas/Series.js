import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GET_TV } from '../../Api'
import NotFound from '../../NotFound'
import GeneralSections from './PageInfos/GeneralSections'
import SeriesPage from './SeriesPage'

const Series = () => {
  return (
    <main className='grid2 minHeight marginTop'>
    <Routes>
      <Route path='/' element={<GeneralSections GET_API={GET_TV} type='tv' title='Séries'/>}/>
      <Route path=':id' element={<SeriesPage type='tv'/>}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </main>
  )
}

export default Series