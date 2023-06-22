import React, { useContext, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/Navbar'
import Login from './assets/components/Login'
import Profile from './assets/components/Profile'
import Public from './assets/components/Public'
import { UserContext } from './assets/context/UserProvider'

function App() {
  const { token, logout } = useContext( UserContext )

  return (
    <div className='app'>
      <Navbar logout={ logout } />
      <Routes>
        <Route 
          path='/'
          element={ token ? <Navigate to="profile"/> : <Login />} />
        <Route 
          path='/profile'
          element={<Profile />} />
        <Route 
          path='/public'
          element={<Public />} />
      </Routes>
    </div>
  )
}

export default App
