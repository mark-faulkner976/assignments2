import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import UserProvider from './assets/context/UserProvider.jsx'
import PublicProvider from './assets/context/PublicProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PublicProvider>
          <App />
        </PublicProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
