import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Categorias from './Components/Categorias';
import Filmes from './Components/Rotas/Filmes';
import Series from './Components/Rotas/Series';
import Pessoas from './Components/Rotas/Pessoas';
import NotFound from './NotFound';
import { GlobalContext } from './Components/ThemeModeContext';
import MenuMobileContext from './Components/MenuMobileContext';

function App() {

  const {mode} = React.useContext(GlobalContext)

  return (
    <div className={`App ${mode === 'dark' ? 'dark' : 'light'}`}>
      <BrowserRouter>
      <MenuMobileContext>
      <Header />
      <Categorias />
      </MenuMobileContext>
      <Routes> 
        <Route path='/tvsearch' element={<Home />}/>
        <Route path='/tvsearch/filmes/todos/*' element={<Filmes />}/>
        <Route path='/tvsearch/series/todos/*' element={<Series />}/>
        <Route path='/tvsearch/pessoas/todos/*' element={<Pessoas />}/>
        <Route path='/tvsearch/*' element={<NotFound />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

//quando clicar na página filmes, faz um fetch em todos os filmes
//notar que a página filmes, pessoas e series são iguais.
//cada uma deve, entao, ser um mesmo componente.