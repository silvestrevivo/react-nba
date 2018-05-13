import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'

class Routes extends Component {
  // state = {}
  render () {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    )
  }
}

export default Routes
