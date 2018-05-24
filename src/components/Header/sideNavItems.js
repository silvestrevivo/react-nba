import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import Aux from '../../hoc/aux'

const SideNavItems = ({ onHideNav }) => {
  const items = [
    {
      type: 'option',
      icon: 'home',
      text: 'Home',
      link: '/'
    },
    {
      type: 'option',
      icon: 'file-text-o',
      text: 'News',
      link: '/news'
    },
    {
      type: 'option',
      icon: 'play',
      text: 'Videos',
      link: '/videos'
    },
    {
      type: 'option',
      icon: 'sign-in',
      text: 'Sign-in',
      link: '/sign-in'
    },
    {
      type: 'option',
      icon: 'sign-out',
      text: 'Sign-out',
      link: '/sign-out'
    }
  ]

  const showItems = () => {
    return items.map((item, i) => {
      return (
        <div className={item.type} key={i}>
          <Link to={item.link} onClick={onHideNav}>
            <FontAwesome name={item.icon} />{item.text}
          </Link>
        </div>
      )
    })
  }

  return (
    <Aux>
      {showItems()}
    </Aux>
  )
}

SideNavItems.propTypes = {
  onHideNav: PropTypes.func
}

export default SideNavItems
