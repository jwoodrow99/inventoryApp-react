import React from 'react';
import service from '../service/service';
import { useEffect, useState } from 'react';

function HomePage() {

  const [token, setToken] = useState("");

  useEffect(() => {
    service.auth.login({
      employee_id: 1002,
      password: 'password'
    }).then(res => {
      setToken(res.token);
    });
  });

  console.log(token);

  return (
    <div>HomePage</div>
  )
}

export default HomePage