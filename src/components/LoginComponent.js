import React from 'react';
import Cookie from 'js-cookie';
import service from '../service/service';
import { useEffect, useState, useContext } from 'react';
import GlobalContext from '../GlobalContext';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LoginComponent() {

  const {setToken, setUser} = useContext(GlobalContext);

  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    service.auth.login({
      employee_id: employeeId,
      password: password
    }).then(res => {

      setToken(res.token);
      setUser(res.user);

      Cookie.set('token', res.token);
      Cookie.set('user', JSON.stringify(res.user));

      setEmployeeId('');
      setPassword('');

    });
  }

  return (
    <div>
        <br/>
        <div>

          <TextField label="Employee ID" variant="standard" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}/><br/>
          <TextField label="Password" variant="standard" type='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
          <br/>
          <Button variant="contained" onClick={() => handleSubmit()}>Login</Button>

        </div>
    </div>
  )
}

export default LoginComponent