import React, { Component } from 'react'
import Header from '../../components/Header'
import PropTypes from 'prop-types'

import Aux from '../aux'

class Layout extends Component {
  state = {}
  render () {
    return (
      <Aux>
        <Header />
        {this.props.children}
        Footer
      </Aux>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
