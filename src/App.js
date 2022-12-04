import logo from './logo.svg';
import { Outlet } from "react-router-dom";
import './App.css';
import HomeMain from './pages/home/main';

import React from 'react'

const App = () => {
  return (
    <div style={{
      
    }}>
      <HomeMain />
      <Outlet />

    </div>
  )
}

export default App

