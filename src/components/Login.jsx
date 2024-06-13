import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!username || !password) {
      setErrorMessage('Both username and password are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // if (!response.ok) {
      //   // If the response is not ok, handle the error
      //   const errorData = await response.json();
      //   setErrorMessage(errorData.error || 'An error occurred.');
      //   return;
      // }

      const data = await response.json();
      if (data.status === 'success') {
        navigate('/dashboard');
      } else {
        setErrorMessage(data.error || 'An error occurred.');
      }
    } catch (error) {
      console.error('There was an error logging in:', error);
      setErrorMessage('Error during login. Please try again later.');
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-yellow-400">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="flex justify-center items-center">
          <img src="images/logo white.png" width="100px" height="300px" />
        </div>
        <i className="text-xl font-semibold text-black mb-6 mt-2 flex justify-center items-center">
          Empower Your Voice -<strong> Login Here</strong>
        </i>
        {/* <h2 className="text-2xl font-semibold text-black mb-6 text-center ">Login</h2> */}
        
        {errorMessage && (
          <div className="mb-4 text-red-600">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-black">Username</label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full bg-gray-200 py-2 text-black border-gray-600 rounded-md shadow-sm focus:ring-black focus:border-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full bg-gray-200 py-2 text-black border-gray-600 rounded-md shadow-sm focus:ring-black focus:border-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md shadow-sm transition ease-in-out delay-100 hover:-translate-1 hover:scale-110 hover:bg-black duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
