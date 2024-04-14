import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showSuccessAlertTimeout, setShowSuccessAlertTimeout] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:3005/auth');
      const { username, password: dbPassword, token } = response.data;

      if (email === username && password === dbPassword) {
        setLoggedIn(true);
        localStorage.setItem('token', token); // Store the token in localStorage
        setShowSuccessAlert(true);
        const timeoutId = setTimeout(() => {
          window.location.href = '/admin';
        }, 2000); // Redirect after 2 seconds
        setShowSuccessAlertTimeout(timeoutId);
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

  const clearAlerts = () => {
    setShowAlert(false);
    setShowSuccessAlert(false);
    if (showSuccessAlertTimeout) {
      clearTimeout(showSuccessAlertTimeout);
      setShowSuccessAlertTimeout(null);
    }
  };

  return (
    <section className="my-5 min-vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <Form onSubmit={handleSubmit} className="bg-light rounded shadow p-4">
              {showAlert && (
                <Alert variant="danger" onClose={clearAlerts} dismissible>
                  Invalid credentials. Please try again.
                </Alert>
              )}
              {showSuccessAlert && (
                <Alert variant="success" onClose={clearAlerts} dismissible>
                  Login success. Redirecting...
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
