import logo from './logo.svg';
import './App.css';
import Cookie from 'js-cookie';
import service from './service/service';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';

import NavBarComponent from './components/NavBarComponent';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">

      <Router>

        <NavBarComponent/>

        <hr/>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
