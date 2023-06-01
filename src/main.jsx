import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home } from './pages/home.jsx'
//import { NavigationMenu } from '.components/nav/nav.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Home></Home>
  </React.StrictMode>,
)
