import { useState } from 'react'
import './App.css'
import { Route, Router, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ServiceDetails from './components/ServiceDetails'

function App() {

  return (
    <div>
      
      <Nav />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/services/:serviceId' element={<ServiceDetails />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
