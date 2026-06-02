import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'

export const Header = () => {
  return (
    <div className="brand-bar auth-brand">
      <div className="brand-logo"><Link to="/home">Soakify</Link></div>
    </div>
  )
}

export default Header
