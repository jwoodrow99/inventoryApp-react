import logo from './logo.svg';
import './App.css';
import Cookie from 'js-cookie';
import service from './service/service';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';

import NavBarComponent from './components/NavBarComponent';

import HomePage from './pages/HomePage';
import CashPage from './pages/CashPage';
import InventoryPage from './pages/InventoryPage';
import ManagePage from './pages/ManagePage';

function App() {
  return (
    <div className="App">

      <Router>

        <NavBarComponent/>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/manage" element={<ManagePage/>} />
          <Route path="/inventory" element={<InventoryPage/>} />
          <Route path="/cash" element={<CashPage/>} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
