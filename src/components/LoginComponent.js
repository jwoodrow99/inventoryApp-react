import React from 'react';
import Cookie from 'js-cookie';
import service from '../service/service';
import { useEffect, useState } from 'react';

function LoginComponent() {

  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    service.auth.login({
      employee_id: employeeId,
      password: password
    }).then(res => {
      Cookie.set('token', res.token);
      setEmployeeId('');
      setPassword('');
    });
  }

  return (
    <div>      
        <br/>
        <form onSubmit={handleSubmit}>

            <label>
                Employee ID:
                <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}/>
            </label>

            <br/>

            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>

            <br/>

            <input type="submit" value="Submit"/>

        </form>
    </div>
  )
}

export default LoginComponent