import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import { AppContext } from '../Context/AppContext'
import './AuthForms.css'
import Header from './Header'

export const Login = () => {
  const { setAuthenticated } = useAuth();
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // placeholder auth: mark authenticated and set user in app context
    setAuthenticated(true);
    dispatch && dispatch({ type: 'SET_USER', payload: { name: email.split('@')[0] || 'User' } });
    navigate('/home');
  }

  return (
    <main className="auth-page">
      <Header />
      <div className="auth-card">
        <h2>Sign in to Soakify</h2>
        <p className="lead">Fast pickup and reliable care — get started.</p>
        <form onSubmit={handleSubmit}>
          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </div>
          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          </div>
          <div className="auth-actions">
            <a className="small-link" href="#">Forgot password?</a>
            <button className="hero-btn auth-cta" type="submit">Sign in</button>
          </div>
        </form>
        <div className="social-row">
          <div className="social-pill">Continue with Apple</div>
          <div className="social-pill">Continue with Google</div>
        </div>
      </div>
    </main>
  )
}
