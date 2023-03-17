import './App.scss'
import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </BrowserRouter>

  )
}

export default App
