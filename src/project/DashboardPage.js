import React, { useState } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../Public/RegisterPage/RegisterPage';

function DashboardPage() {
  // State to manage view: login, register, or dashboard
  const [view, setView] = useState('login'); // Can be 'login', 'register', or 'dashboard'

  // Handle the login or register process
  const handleLogin = () => {
    setView('dashboard'); // Navigate to the dashboard after login
  };

  const handleRegister = () => {
    setView('dashboard'); // Navigate to the dashboard after registration
  };

  // Function to toggle between Login and Register
  const toggleView = () => {
    setView(view === 'login' ? 'register' : 'login');
  };

  return (
    <div className="dashboard-page">
      {view === 'dashboard' ? (
        // Dashboard view after login or register
        <div className="dashboard">
          <h1>Welcome to the Dashboard</h1>
          <nav>
            <ul>
              <li><a href="/profile">Profile</a></li>
              <li><a href="/settings">Settings</a></li>
              <li><a href="/logout">Logout</a></li>
            </ul>
          </nav>
          <div className="dashboard-content">
            <h2>Dashboard Overview</h2>
            <p>Here you can see your recent activities, stats, and other details.</p>
            <div className="dashboard-stats">
              <div className="stat-box">
                <h3>Posts</h3>
                <p>10</p>
              </div>
              <div className="stat-box">
                <h3>Comments</h3>
                <p>25</p>
              </div>
              <div className="stat-box">
                <h3>Followers</h3>
                <p>50</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Login or Register view
        <div className="auth-page">
          {view === 'login' ? (
            <LoginPage onLogin={handleLogin} />
          ) : (
            <RegisterPage onRegister={handleRegister} />
          )}

          {/* Button to toggle between Login and Register */}
          <button onClick={toggleView}>
            {view === 'login' ? 'Switch to Register' : 'Switch to Login'}
          </button>
        </div>
      )}
    </div>
  );
}

export default DashboardPage;