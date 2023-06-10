import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:3001/auth');
      const { username, password: dbPassword, token } = response.data;

      if (email === username && password === dbPassword) {
        setLoggedIn(true);
        localStorage.setItem('token', token); // Store the token in localStorage
        window.location.href = '/admin';
      } else {
        setEmail('');
        setPassword('');
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setEmail('');
      setPassword('');
      setShowAlert(true);
    }
  };

  return (
    <section className="my-5 min-vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <Form onSubmit={handleSubmit} className="bg-light rounded shadow p-4">
              {showAlert && (
                <Alert variant="danger">
                  Invalid credentials. Please try again.
                </Alert>
              )}
              <Form.Group controlId="email" className="mb-3">
                <Form.Label className="fw-bold">Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="password" className="mb-3">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button type="submit" variant="primary">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
