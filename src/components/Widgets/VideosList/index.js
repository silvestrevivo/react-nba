import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Button from '../Buttons'
import VideosListTemplate from './VideosTemplate'

class VideosList extends Component {
  static propTypes = {
    type: PropTypes.string,
    title: PropTypes.bool,
    start: PropTypes.number,
    ammount: PropTypes.number,
    loadmore: PropTypes.bool
  }

  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.ammount,
    ammount: this.props.ammount
  }

  renderTitle = () => {
    return this.props.title ? <h3><strong>NBA</strong> Videos</h3> : null
  }

  componentDidMount () {
    this.request(this.state.start, this.state.end)
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`http://localhost:3000/teams/`)
        .then(response => {
          this.setState({
            teams: response.data
          })
        })
    }

    if (start < 9) {
      axios.get(`http://localhost:3000/videos/?_start=${start}&_end=${end}`)
        .then(response => {
          this.setState({
            videos: [...this.state.videos, ...response.data],
            start,
            end
          })
        })
    }
  }

  renderVideos = () => {
    let template = null

    switch (this.props.type) {
      case 'card':
        template = <VideosListTemplate data={this.state.videos} teams={this.state.teams} />
        break
      default:
        template = null
    }
    return template
  }

  loadMore = () => {
    let end = this.state.end + this.state.ammount
    this.request(this.state.end, end)
  }

  renderButton = () => {
    return this.props.loadmore
      ? <Button type="loadmore" loadMore={this.loadMore} cta="Load More Videos" />
      : <Button type="linkTo" cta="More Videos" linkTo="/videos" />
  }

  render () {
    return (
      <div className="videoList_wrapper">
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    )
  }
}

export default VideosList
