import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Aux from '../aux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

class Layout extends Component {
  state = {
    showNav: false
  }

  render () {
    return (
      <Aux>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.setState({ showNav: false })}
          onOpenNav={() => this.setState({ showNav: true })} />
        {this.props.children}
        <Footer />
      </Aux>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
