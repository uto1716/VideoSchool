import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BlogList from './pages/BlogList'
import BlogDetail from './pages/BlogDetail'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
