import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { NPCContextProvider } from './components/NPCContext.jsx'

// dont know if this b how it do but it b how i do

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NPCContextProvider>
      <App />
    </NPCContextProvider>
  </BrowserRouter>,
)
