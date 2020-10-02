import React, { useState } from 'react';
import { Form, FormControl, FormGroup, Button, Alert, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';
import loginApi from '../../utils/login.api';
import './Login.styles.css';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function authenticate(event) {
    event.preventDefault();
    setErrorMessage('');
    loginApi(username, password)
      .then((user) => {
        login(user);
        history.push('/');
      })
      .catch((error) => {
        setUsername('');
        setPassword('');
        setErrorMessage(error.message);
      });
  }

  return (
    <Card>
      <Card.Header className="text-center">
        <h1>Sign in</h1>
        <h3>to continue to YouTube</h3>
      </Card.Header>
      <Card.Body className="text-center">
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Form onSubmit={authenticate}>
          <FormGroup controlId="formEmail">
            <FormControl
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            ></FormControl>
          </FormGroup>
          <FormGroup controlId="formPassword">
            <FormControl
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></FormControl>
          </FormGroup>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer>
        <ul>
          <li>username: wizeline</li>
          <li>password: Rocks!</li>
        </ul>
      </Card.Footer>
    </Card>
  );
}

export default LoginPage;
