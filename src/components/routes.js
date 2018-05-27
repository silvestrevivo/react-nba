import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '../hoc/Layout'
import Home from './Home'
import NewsArticles from '../components/Articles/News/Post'
import VideoArticle from '../components/Articles/Videos/Video'
import NewsMain from '../components/Articles/News/Main'
import VideosMain from '../components/Articles/Videos/Main'

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news" exact component={NewsMain} />
        <Route path="/articles/:id" exact component={NewsArticles} />
        <Route path="/videos/:id" exact component={VideoArticle} />
        <Route path="/videos" exact component={VideosMain} />
      </Switch>
    </Layout>
  )
}

export default Routes
