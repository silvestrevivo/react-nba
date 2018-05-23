import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Layout from '../hoc/Layout'
import NewsArticle from '../components/Articles/News/Post'

class Routes extends Component {
  // state = {}
  render () {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articles/:id" exact component={NewsArticle} />
        </Switch>
      </Layout>
    )
  }
}

export default Routes
