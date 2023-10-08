// import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import WinnerCard from './components/WinnerCard/WinnerCard'


function App() {

  return (
    <div className="page">
      <Header />
      <Card />
      <WinnerCard />
      <Footer />
    </div>
  )
}

export default App
