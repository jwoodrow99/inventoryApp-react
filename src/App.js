import service from './service/service';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ManagePage from './pages/ManagerPage';
import ItemPage from './pages/ItemPage';
import CashPage from './pages/CashPage';

import NavBar from './components/NavBarComponent';
import Footer from './components/FooterComponent';

function App() {



  return (
    <div className="App">
      <Router>

        <NavBar/>

        <br/><hr/><br/>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/manage" element={<ManagePage/>} />
          <Route path="/item" element={<ItemPage/>} />
          <Route path="/cash" element={<CashPage/>} />
        </Routes>

        <br/><br/>

        <Footer/>

      </Router>
    </div>
  );
}

export default App;
