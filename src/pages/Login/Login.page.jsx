import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';
import loginApi from '../../utils/login.api';
import './Login.styles.css';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  function authenticate(event) {
    event.preventDefault();
    loginApi(username, password)
      .then((user) => {
        console.log(user);
        login(user);
        history.push('/');
      })
      .catch((error) => {
        setUsername('');
        setPassword('');
        console.log(error.message);
      });
  }

  return (
    <>
      <section className="login">
        <h1>Sign in</h1>
        <h3>to continue to YouTube</h3>
        <form onSubmit={authenticate} className="login-form">
          <div className="form-group">
            <label htmlFor="username">
              <strong>username </strong>
              <input
                required
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>password </strong>
              <input
                required
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="ui fluid red button">
            login
          </button>
        </form>
      </section>
      <section className="login">
        <div className="ui ignored bottom attached warning message">
          <ul>
            <li>username: wizeline</li>
            <li>password: Rocks!</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default LoginPage;
