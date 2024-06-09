import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    generateUsername();
  }, []);

  const spaceNames = [
    'Astronaut', 'Galaxy', 'Nebula', 'Star', 'Comet', 'Meteor', 
    'Planet', 'Orbit', 'Eclipse', 'Cosmos', 'Rocket', 'Satellite', 
    'Asteroid', 'BlackHole', 'Supernova', 'Pulsar', 'Quasar', 'Zenith', 
    'Celestial', 'Interstellar', 'Voyager', 'Mars', 'Venus', 'Jupiter'
  ];

  const generateUsername = () => {
    const randomName = spaceNames[Math.floor(Math.random() * spaceNames.length)];
    const randomNumber = Math.floor(Math.random() * 10000); // Four-digit random number
    setUsername(`${randomName}${randomNumber}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!agree) {
      alert("You must agree to the terms and conditions!");
      return;
    }

    try {
      const response = await fetch('http://localhost:8001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          emailid: email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);

      // if (data.status === 'success') {
      //   alert('User added successfully.');
      // } else {
      //   alert(data.error || 'An error occurred.');
      // }

      if (response.ok){
        navigate("/login");
      }
    } catch (error) {
      console.error('There was an error registering the user:', error);
      alert('Error during signup. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-400">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center items-center">
          <img src="images/logo white.png" width="100px" height="300px" />
        </div>
        <i className="text-xl font-semibold text-black mb-6 mt-2 flex justify-center items-center">
          Empower Your Voice -<strong> Register Now</strong>
        </i>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm-2 font-medium text-black">Username</label>
            <div className="flex items-center">
              <input
                type="text"
                id="username"
                className="mt-1 block w-full bg-gray-200 py-2 text-black border-black rounded-md shadow-sm focus:ring-black focus:border-black"
                value={username}
                readOnly
              />
              <button
                type="button"
                onClick={generateUsername}
                className="ml-2 bg-black text-white px-4 py-2 rounded-md shadow-sm transition ease-in-out delay-100 hover:-translate-1 hover:scale-110 hover:bg-black duration-300"
              >
                Change
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm-2 font-medium text-black">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full bg-gray-200 py-2  text-black border-gray-600 rounded-md shadow-sm focus:ring-black focus:border-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm-2 font-medium text-black">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full bg-gray-200 text-black py-2 border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm-2 font-medium  text-black">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 block w-full bg-gray-200 text-black py-2 border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="agree"
              className="text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:border-blue-500"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="agree" className="ml-2 block text-sm font-medium text-gray-600">
              I agree to the <a href="#" className="text-blue-400 hover:underline">terms and conditions</a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md shadow-sm transition ease-in-out delay-100 hover:-translate-1 hover:scale-110 hover:bg-black duration-300"
          >
            Register
          </button>
          <p className="mt-4 text-center text-gray-600 text-sm">
            Already have an account? <a href="#" className="text-blue-400 hover:underline">Login here.</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
