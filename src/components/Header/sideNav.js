import React from 'react'
import PropTypes from 'prop-types'
import SideNav from 'react-simple-sidenav'

const SideNavigation = (props) => {
  return (
    <div>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{ backgroundColor: '#242424', maxWidth: '300px' }}>
        Options
      </SideNav>
    </div>
  )
}

SideNavigation.propTypes = {
  showNav: PropTypes.bool,
  onHideNav: PropTypes.func
}

export default SideNavigation
