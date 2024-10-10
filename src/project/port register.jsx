import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [lastname, setLastName] = useState('');
  const [contactno, setContactNo] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation (you should implement more robust checks)
    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      // Replace with your actual registration logic
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Successful registration - redirect or handle accordingly
        console.log('Registration successful!');
        // Redirect to the desired page
        window.location.href = '/login'; // Redirect to login
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Registration failed.');
      }
    } catch (error) {
      setErrorMessage('An error occurred during registration.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="firstname"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="middlename">Middle Name:</label>
          <input
            type="middlename"
            id="middlename"
            value={middlename}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="lastname">Last Name:</label>
          <input
            type="lastname"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            />
        </div>
        <div>
        <label htmlFor="contactno">Contact No:</label>
          <input
            type="contactno"
            id="contactno"
            value={contactno}
            onChange={(e) => setContactNo(e.target.value)}
            />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;