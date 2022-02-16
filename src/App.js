import './App.css';
import service from './service/service';
import { useEffect, useState } from 'react';

function App() {

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
    <div className="App">
      <p>Hello World!</p>
    </div>
  );
}

export default App;
