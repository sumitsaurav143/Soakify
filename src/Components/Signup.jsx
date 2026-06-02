import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import { AppContext } from '../Context/AppContext';
import './AuthForms.css'
import Header from './Header'

export const Signup = () => {
  const { setAuthenticated } = useAuth();
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // placeholder signup: set authenticated and user
    setAuthenticated(true);
    dispatch && dispatch({ type: 'SET_USER', payload: { name: name || email.split('@')[0] } });
    navigate('/home');
  }

  return (
    <main className="auth-page">
      <Header />
      <div className="auth-card">
        <h2>Create your Soakify account</h2>
        <p className="lead">Fast signup — choose a time and we'll take care of the rest.</p>
        <form onSubmit={handleSubmit}>
          <div className="auth-field">
            <label htmlFor="name">Full name</label>
            <input id="name" type="text" value={name} onChange={(e)=>setName(e.target.value)} required />
          </div>
          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </div>
          <div className="auth-field">
            <label htmlFor="password">Create password</label>
            <input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          </div>
          <div className="auth-actions">
            <div />
            <button className="hero-btn auth-cta" type="submit">Create account</button>
          </div>
        </form>
      </div>
    </main>
  )
}
