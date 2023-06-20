import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { UglyContextProvider } from './assets/UglyContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UglyContextProvider>
    <App />
  </UglyContextProvider>,
)
