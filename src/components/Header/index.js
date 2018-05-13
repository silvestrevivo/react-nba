import React from 'react'
import PropTypes from 'prop-types'
import logoImage from '../../../assets/img/nba_logo.png'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import SideNav from './sideNav'

const Header = (props) => {
  const logo = () => (
    <Link to="/" className="logo">
      <img src={logoImage} alt="nba-logo" />
    </Link>
  )

  const navBars = () => (
    <div className="bars">
      <FontAwesome name="bars"
        onClick={props.onOpenNav}
        style={{ color: '#fff', padding: '10px', cursor: 'pointer' }} />
    </div>
  )

  return (
    <header>
      <SideNav {...props} />
      <div className="headerOpt">
        {navBars()}
        {logo()}
      </div>
    </header>
  )
}

Header.propTypes = {
  showNav: PropTypes.bool,
  onHideNav: PropTypes.func,
  onOpenNav: PropTypes.func
}

export default Header
