import React from 'react'
import logoImage from '../../../assets/img/nba_logo.png'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

const Header = () => {
  const logo = () => (
    <Link to="/" className="logo">
      <img src={logoImage} alt="nba-logo" />
    </Link>
  )

  const navBars = () => (
    <div className="bars">
      <FontAwesome name="bars"
        onClick={() => console.log('sidebar')}
        style={{ color: '#fff', padding: '10px', cursor: 'pointer' }} />
    </div>
  )

  return (
    <header>
      <div className="headerOpt">
        {navBars()}
        {logo()}
      </div>
    </header>
  )
}

export default Header
