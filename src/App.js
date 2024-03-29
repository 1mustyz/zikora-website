import './App.css';
import IndexHome from './pages/home';
import IndexAbout from './pages/about'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexContact from './pages/contact';
import IndexLoans from './pages/loans'
import IndexAccount from './pages/account'
import IndexCurrentAccount from './pages/currentAccount';
import IndexSavingAccount from './pages/savingsAccount';
import IndexMainChannels from './pages/channels/mainChannels'
import IndexMobileBankingChannels from './pages/channels/mobileBanking'
import IndexAgencyBankingChannels from './pages/channels/agencyBanking'
import IndexUssdBankingChannels from './pages/channels/ussdBanking'
import IndexPolicy from './pages/privacy/policy'
import IndexTerms from './pages/privacy/termsOfService'
import IndexBusinessBanking from './pages/businessBanking';
import IndexBetaPage from './pages/betaPage';
import AppToast from './AppToast';


import React from 'react'

const App = () => {
  
  return (
    <BrowserRouter>
      <div >
      <AppToast/>
        <Routes>
          <Route path='/' index element={<IndexHome />}/>
          <Route path='contact' element={<IndexContact /> }/>
          <Route path='about' element={<IndexAbout /> }/>
          <Route path='loans' element={<IndexLoans /> }/>
          <Route path='account' element={<IndexAccount /> }/>
          <Route path='current-account' element={<IndexCurrentAccount /> }/>
          <Route path='saving-account' element={<IndexSavingAccount /> }/>
          <Route path='main-channels' element={<IndexMainChannels /> }/>
          <Route path='mobile-banking' element={<IndexMobileBankingChannels /> }/>
          <Route path='agency-banking' element={<IndexAgencyBankingChannels /> }/>
          <Route path='ussd-banking' element={<IndexUssdBankingChannels /> }/>
          <Route path='privacy-policy' element={<IndexPolicy /> }/>
          <Route path='terms-service' element={<IndexTerms /> }/>
          <Route path='business-banking' element={<IndexBusinessBanking /> }/>
          <Route path='beta-request' element={<IndexBetaPage /> }/>
          
        </Routes>
      </div>
    </BrowserRouter> 
  )
}

export default App

