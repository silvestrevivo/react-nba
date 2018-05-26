import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Header from './header'
import Body from './body'
import VideosRelated from '../../../Widgets/VideosList/VideosRelated'

class VideoArticle extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    article: {},
    team: [],
    teams: [],
    related: []
  }

  componentDidMount () {
    axios.get(`http://localhost:3000/videos?id=${this.props.match.params.id}`)
      .then(response => {
        let article = response.data[0]

        axios.get(`http://localhost:3000/teams?id=${article.team}`)
          .then(response => {
            this.setState({
              article,
              team: response.data
            })
            this.getRelated()
          })
      })
  }

  getRelated = () => {
    axios.get(`http://localhost:3000/teams`)
      .then(response => {
        let teams = response.data

        axios.get(`http://localhost:3000/videos?q=${this.state.team[0].city}&_limit=3`)
          .then(response => {
            this.setState({
              teams: teams,
              related: response.data
            })
          })
      })
  }

  render () {
    const { article, team, teams, related } = this.state
    return (
      <div>
        <Header teamData={team[0]} />
        <Body article={article} />
        <VideosRelated
          data={related}
          teams={teams} />
      </div>
    )
  }
}

export default VideoArticle
