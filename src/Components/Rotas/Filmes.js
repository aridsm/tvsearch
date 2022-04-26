import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { GET_MOVIE} from '../../Api';
import NotFound from '../../NotFound';
import GeneralSections from './PageInfos/GeneralSections'; 
import FilmesPage from './FilmesPage'

const Filmes = () => {

  return (
    <main className='grid2 minHeight marginTop'>
    <Routes>
      <Route path='/' element={<GeneralSections GET_API={GET_MOVIE} type='movie' title='Filmes' />} />
      <Route path='/:id' element={<FilmesPage type='movie'/>}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </main>
  )
}

export default Filmes