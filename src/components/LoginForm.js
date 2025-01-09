import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {sideContext} from '../context/Context'
import '../styles/loginform.css'
import LoadingSpinner from './LoadingSpinner';
import { Puff } from 'react-loader-spinner';

const LoginForm = ({setLoading,loading} ) => {
  const { login, token, lastPath, setLastPath} = useContext(sideContext);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  

  useEffect(() => {
    if (token) {
      navigate(lastPath === '/login' ? '/' : lastPath);
    } else {      
      setLastPath(currentPath);
      localStorage.setItem('lastPath', currentPath); 
    }
  }, [navigate, token, lastPath, currentPath, setLastPath]);

  const handleSubmit = async (e) => {
    e.preventDefault();    
    setError('');

    const { username, password } = formData;
    

    try {
      const success = await login(username, password);
      if (success) {        
        navigate(lastPath === '/login' ? '/' : lastPath);        
      } else {
        setError('Invalid username or password');        
      }
    } catch (error) {
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-outer-sec">
      <div className="login-container">      
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>      
    </div>
    </div>
  );
};

export default LoginForm;
