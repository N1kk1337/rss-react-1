import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import FormsPage from './pages/FormsPage/FormsPage';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/forms" element={<FormsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
