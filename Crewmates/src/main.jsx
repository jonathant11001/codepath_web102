import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} element={<CreateACrewmate/>} />
          <Route index={false} element={<CrewmateGallery/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
