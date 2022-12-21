import './App.css';
import IndexHome from './pages/home';
import IndexAbout from './pages/about'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexContact from './pages/contact';
import IndexLoans from './pages/loans'
import IndexAccount from './pages/account'
import IndexSubAccount from './pages/subAccount';
import IndexMainChannels from './pages/channels/mainChannels'
import IndexMobileBankingChannels from './pages/channels/mobileBanking'
import IndexAgencyBankingChannels from './pages/channels/agencyBanking'
import IndexUssdBankingChannels from './pages/channels/ussdBanking'


import React from 'react'

const App = () => {
  
  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route path='/' index element={<IndexHome />}/>
          <Route path='contact' element={<IndexContact /> }/>
          <Route path='about' element={<IndexAbout /> }/>
          <Route path='loans' element={<IndexLoans /> }/>
          <Route path='account' element={<IndexAccount /> }/>
          <Route path='sub-account' element={<IndexSubAccount /> }/>
          <Route path='main-channels' element={<IndexMainChannels /> }/>
          <Route path='mobile-banking' element={<IndexMobileBankingChannels /> }/>
          <Route path='agency-banking' element={<IndexAgencyBankingChannels /> }/>
          <Route path='ussd-banking' element={<IndexUssdBankingChannels /> }/>
          
        </Routes>
      </div>
    </BrowserRouter> 
  )
}

export default App

