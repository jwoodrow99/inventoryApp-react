import service from './service/service';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ManagePage from './pages/ManagerPage';
import ItemPage from './pages/ItemPage';
import CashPage from './pages/CashPage';

function App() {
  return (
    <div className="App">
      <Router>

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/manage'>Manage</Link>
          <Link to='/item'>Item</Link>
          <Link to='/cash'>Cash</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/manage" element={<ManagePage/>} />
          <Route path="/item" element={<ItemPage/>} />
          <Route path="/cash" element={<CashPage/>} />
        </Routes>

        <footer>This is a footer.</footer>

      </Router>
    </div>
  );
}

export default App;
