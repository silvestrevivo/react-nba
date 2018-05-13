import React from 'react'
import logoImage from '../../../assets/img/nba_logo.png'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer>
    <Link to="/" className="logo">
      <img src={logoImage} alt="nba-logo" />
    </Link>
    <div className="right">
      @NBA {(new Date()).getFullYear()} All rights reserved.
    </div>
  </footer>
)

export default Footer
