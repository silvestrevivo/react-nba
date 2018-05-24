import React from 'react'
import PropTypes from 'prop-types'
import Aux from '../../hoc/aux'
import SideNav from 'react-simple-sidenav'
import SideNavItems from './sideNavItems'

const SideNavigation = ({ showNav, onHideNav }) => {
  return (
    <Aux>
      <SideNav
        showNav={showNav}
        onHideNav={onHideNav}
        navStyle={{ backgroundColor: '#242424', maxWidth: '300px' }}>
        <SideNavItems onHideNav={onHideNav} />
      </SideNav>
    </Aux>
  )
}

SideNavigation.propTypes = {
  showNav: PropTypes.bool,
  onHideNav: PropTypes.func
}

export default SideNavigation
