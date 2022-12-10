import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import './App.css';
import HomeMain from './pages/home/main';
import IndexHome from './pages/home';
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
          
        </Routes>
      </div>
    </BrowserRouter> 
  )
}

export default App

