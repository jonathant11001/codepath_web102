import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout';
import CreateACrewmate from "./routes/CreateACrewmate";
import CrewmateGallery from "./routes/CrewmateGallery";
import EditCrewmate from "./routes/EditCrewmate";
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
          <Route index={false} path="/create/" element={<CreateACrewmate/>} />
          <Route index={false} path="/gallery/" element={<CrewmateGallery/>} />
          <Route index={false} path="/gallery/edit/:id" element={<EditCrewmate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
