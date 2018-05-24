import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Header from './header'
import Body from './body'

class NewsArticles extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    article: [],
    team: []
  }

  componentDidMount () {
    axios.get(`http://localhost:3000/articles?id=${this.props.match.params.id}`)
      .then(response => {
        let article = response.data[0]

        axios.get(`http://localhost:3000/teams?id=${article.team}`)
          .then(response => {
            this.setState({
              article,
              team: response.data
            })
          })
      })
  }

  render () {
    const { article, team } = this.state
    return (
      <div className="articleWrapper">
        <Header teamData={team[0]} date={article.date} author={article.author} />
        <Body />
      </div>
    )
  }
}

export default NewsArticles
