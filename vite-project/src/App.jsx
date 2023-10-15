import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import mainPages from './pages/mainPages'
import detailPages from './pages/detailPages'
import Header from './components/Header'
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Header/>
      <Route path='/' element={<mainPages/>}/>
      <Route path='/movie/:movie_id' element={<detailPages/>}/>
      </Routes></BrowserRouter>
  )
}

export default App
