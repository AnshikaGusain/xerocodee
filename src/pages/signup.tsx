import React, { useState } from 'react';
import  Link  from "next/link";
const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(email) || !isValidPassword(password)) {
      alert('Please enter a valid email and password (length more than or equal to 8 characters');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      // Send the data to the server
      const response = await fetch('https://xerocodee-backend.vercel.app/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.status === 409) {
        // Server returned an error
        alert('Email already exists');
      } else if (response.status === 201) {
        // Server successfully processed the request
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please check Email and Password.');
      }
    } catch (error) {
      // Error occurred while sending the request
      alert('An error occurred. Please try again later.');
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password: string) => {
    // Add your password validation logic here
    // For example, you can check the length, uppercase, lowercase, etc.
    return password.length >= 8;
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {submitted ? (
        <div style={{ color: 'white', fontFamily: 'Open Sans', fontSize: '50px', textAlign: 'center' }}>
          Thank you for signing up!
        </div>
      ) : (
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <button className="form-submit-btn" type="submit">
              Submit
            </button>
          </form>
          <span style={{color:'#717171'}}>Already have an account?</span>
          <Link href="/signin" >
          <div style={{color:'#717171'}}>
            Sign In
            </div>
            </Link>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
