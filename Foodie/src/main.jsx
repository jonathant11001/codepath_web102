import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout';
import CreateAPost from "./routes/CreateAPost";
import EditPost from "./routes/EditPost";
import Post from "./routes/Post.jsx";
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
          <Route index={false} path="/:id" element={<Post />} />
          <Route index={false} path="/create/" element={<CreateAPost />} />
          <Route index={false} path="/:id/edit/" element={<EditPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
