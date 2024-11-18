import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import ListaDePeliculas from './components/ListaDePeliculas';
// import TarjetaDePelicula from './components/TarjetaDePelicula';
import './App.css'
// import ListaDeDirectores from './components/ListaDeDirectores';
// import ListaGeneros from './components/ListaDeGeneros';
import Register from './auth/Register';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Register/>}/>
          {/* <Route path="/" element={<ListaDePeliculas />} />
          <Route path="/peliculas/:id" element={<TarjetaDePelicula />} /> */}
          {/* <Route path='/directores' element={<ListaDeDirectores/>}/>
          <Route path='/genero' element={<ListaGeneros/>}/> */}
        </Routes>
        
      </div>
    </Router>
    
  )
}

export default App
