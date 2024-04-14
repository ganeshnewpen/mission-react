import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddUser = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmittingMessage, setShowSubmittingMessage] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isSubmitting) {
      setShowSubmittingMessage(true);
      timeoutId = setTimeout(() => {
        setShowSubmittingMessage(false);
        setIsSubmitting(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSubmitting]);

  const onSubmit = (data, event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage('');
    axios
      .get('http://localhost:3005/users?email=' + data.email)
      .then((response) => {
        if (response.data.length > 0) {
          setErrorMessage('Email already exists!');
          setIsSubmitting(false);
        } else {
          axios
            .post('http://localhost:3005/users', data)
            .then((response) => {
              reset();
              setSuccessMessage('User added successfully');
              setTimeout(() => {
                setSuccessMessage('');
              }, 2000);
            })
            .catch(handleError);
        }
      })
      .catch(handleError);
  };

  const handleError = (error) => {
    console.error('Error:', error);
    setErrorMessage('An error occurred. Please try again later.');
    setIsSubmitting(false);
  };

  const name = (value) => {
    if (/\d/.test(value)) {
      return 'Name should not contain numbers';
    }
    return true;
  };

  return (
    <div className="container min-vh-100 my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4>Add User</h4>
            </div>
            <div className="card-body">
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="form-ui">
                {successMessage && <Alert variant="success">{successMessage}</Alert>}

                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    {...register('name', {
                      required: true,
                      validate: name
                    })}
                  />
                  {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="xyz@gmail.com"
                    {...register('email', {
                      required: true
                    })}
                  />
                  {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
                </Form.Group>

                <Button className="btn btn-success mt-3" type="submit">
                  {showSubmittingMessage && !errorMessage ? 'Submitting...' : 'Submit'}
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
