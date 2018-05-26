import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '../hoc/Layout'
import Home from './Home'
import NewsArticles from '../components/Articles/News/Post'
import VideoArticle from '../components/Articles/Videos/Video'

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/articles/:id" exact component={NewsArticles} />
        <Route path="/videos/:id" exact component={VideoArticle} />
      </Switch>
    </Layout>
  )
}

export default Routes
