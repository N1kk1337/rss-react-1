import './App.scss';
import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
