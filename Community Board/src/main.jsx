import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Container from './components/Container';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Container />
  </React.StrictMode>,
)
