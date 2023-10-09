// import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import WinnerCard from './components/WinnerCard/WinnerCard'
import Banner from './components/Banner/Banner'
import ProductCard from './components/ProductCard/ProductCard'


function App() {

  return (
    <div className="page">
      <Header />
      <Banner />
      <ProductCard />
      <Card />
      <WinnerCard />
      <Footer />
    </div>
  )
}

export default App
