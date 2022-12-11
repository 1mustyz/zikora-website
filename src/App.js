import './App.css';
import IndexHome from './pages/home';
import IndexAbout from './pages/about'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexContact from './pages/contact';
import React from 'react'

const App = () => {
  
  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route path='/' index element={<IndexHome />}/>
          <Route path='contact' element={<IndexContact /> }/>
          <Route path='about' element={<IndexAbout /> }/>
          
        </Routes>
      </div>
    </BrowserRouter> 
  )
}

export default App

