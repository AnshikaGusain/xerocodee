import React, { useState } from 'react';
import AdminPanel from './adminPanel';
import { useRouter } from 'next/router';
const LoginPage = () => {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail(email) || !isValidPassword(password)) {
      alert('Please enter a valid email and password (length more than 8 characters).');
      return;
    }

    try {
      // Send the data to the server
      const response = await fetch('https://xerocodee-backend.vercel.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        // Login successful
        if(email=='admin@gmail.com'){
            setIsAdmin(true);
        }
        else{
            setSubmitted(true);
            alert("Login successful");
            router.push('/');
        }
      } else if (response.status === 401) {
        // Invalid email or password
        alert('Invalid email or password.');
      } else {
        alert('Something went wrong. Please try again later.');
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
        {isAdmin ? (
        // If the user is logged in as admin, show the AdminPanel
        <AdminPanel />
      ) : (
      <>
      <h1>Login</h1>
      {submitted ? (
        <div style={{ color: 'white', fontFamily: 'Open Sans', fontSize: '50px', textAlign: 'center' }}>
          Login successful!
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
            <button className="form-submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
      </> )}
    </div>
  );
};

export default LoginPage;
