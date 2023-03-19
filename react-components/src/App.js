import './App.scss';
import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
class App extends React.Component {
    render() {
        return (React.createElement(HashRouter, null,
            React.createElement(Routes, null,
                React.createElement(Route, { path: "*", element: React.createElement(ErrorPage, null) }),
                React.createElement(Route, { path: "/", element: React.createElement(MainPage, null) }),
                React.createElement(Route, { path: "/about", element: React.createElement(AboutPage, null) }))));
    }
}
export default App;
