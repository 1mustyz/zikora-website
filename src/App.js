import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import './App.css';
import HomeMain from './pages/home/main';
import IndexHome from './pages/home';

import React from 'react'

const App = () => {
  return (
    <div style={{
      
    }}>
      <IndexHome />
      <Outlet />

    </div>
  )
}

export default App

