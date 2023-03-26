import './App.scss';
import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import FormsPage from './pages/FormsPage/FormsPage';
import Header from './components/Header/Header';
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Header />

        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/forms" element={<FormsPage />} />
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
