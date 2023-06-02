import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function InsertForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
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
    axios.get('http://localhost:3001/users?email=' + data.email)
      .then((response) => {
        if (response.data.length > 0) {
          setErrorMessage('Email already exists!');
          setIsSubmitting(false);
        } else {
          axios.post('http://localhost:3001/users', data)
            .then((response) => {
              reset();
              setSuccessMessage('Form submitted successfully');
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
    <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className="form-ui">
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          type="text"
          id="name"
          placeholder="Enter your full name"
          {...register('name', {
            required: true,
            validate: name,
          })}
        />
        {errors.name && (
          <span className="text-danger">{errors.name.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          type="email"
          id="email"
          placeholder="xyz@gmail.com"
          {...register('email', {
            required: true,
          })}
        />
        {errors.email && (
          <span className="text-danger">{errors.email.message}</span>
        )}
        {errorMessage && (
          <span className="text-danger">{errorMessage}</span>
        )}
      </div>

      <button className="btn btn-primary mt-3" type="submit">
        {showSubmittingMessage && !errorMessage ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}