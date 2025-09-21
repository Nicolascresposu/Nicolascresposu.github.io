import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* add more routes if you want, like for example: */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </HashRouter>
)
