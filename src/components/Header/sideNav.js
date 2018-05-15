import React from 'react'
import PropTypes from 'prop-types'
import Aux from '../../hoc/aux'
import SideNav from 'react-simple-sidenav'
import SideNavItems from './sideNavItems'

const SideNavigation = (props) => {
  return (
    <Aux>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{ backgroundColor: '#242424', maxWidth: '300px' }}>
        <SideNavItems onHideNav={props.onHideNav} />
      </SideNav>
    </Aux>
  )
}

SideNavigation.propTypes = {
  showNav: PropTypes.bool,
  onHideNav: PropTypes.func
}

export default SideNavigation
