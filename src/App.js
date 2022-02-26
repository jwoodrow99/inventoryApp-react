import './App.css';
import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';

import GlobalContext from './GlobalContext';

import NavBarComponent from './components/NavBarComponent';
import HomePage from './pages/HomePage';
import CashPage from './pages/CashPage';
import InventoryPage from './pages/InventoryPage';
import ManagePage from './pages/ManagePage';

function App() {

  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {

    let cookieToken = Cookie.get('token');
    let cookieUser = Cookie.get('user');

    if(cookieToken){
      setToken(cookieToken);
    }

    if(cookieUser){
      setUser(JSON.parse(cookieUser));
    }

  }, []);

  return (
    <div className="App">

      <GlobalContext.Provider value={{token, setToken, user, setUser}}>

        <Router>

          <NavBarComponent/>

          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/manage" element={<ManagePage/>} />
            <Route path="/inventory" element={<InventoryPage/>} />
            <Route path="/cash" element={<CashPage/>} />
          </Routes>

        </Router>

      </GlobalContext.Provider>

    </div>
  );
}

export default App;
