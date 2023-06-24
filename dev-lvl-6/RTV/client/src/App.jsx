import React, { useContext, useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/Navbar'
import Login from './assets/components/Login'
import Profile from './assets/components/Profile'
import Public from './assets/components/Public'
import ProtectedRoute from './assets/components/ProtectedRoute'
import { UserContext } from './assets/context/UserProvider'

function App() {
  const { token, logout } = useContext( UserContext )

  return (
    <div className='app'>
      { token && <Navbar logout={ logout } /> }
      <Routes>
        <Route 
          path='/'
          element={ token ? <Navigate to="profile"/> : <Login /> } />
        <Route 
          path='/profile'
          element={ <ProtectedRoute token={ token } redirectTo='/' > 
            <Profile />
          </ProtectedRoute> } />
        <Route 
          path='/public'
          element={
            <ProtectedRoute token={ token } redirectTo='/' >
              <Public />
            </ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App