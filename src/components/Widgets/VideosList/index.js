import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import axios from 'axios'
import Button from '../Buttons'

class VideosList extends Component {
  static propTypes = {
    title: PropTypes.string,
    start: PropTypes.number,
    amount: PropTypes.number,
    loadmore: PropTypes.bool
  }

  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  renderTitle = () => {
    return this.props.title ? <h3><strong>NBA</strong> Videos</h3> : null
  }

  loadMore = () => {
    // ...
  }

  renderButton = () => {
    return this.props.loadmore
      ? <Button type="loadmore" loadmore={() => this.loadMore()} cta="Load More Videos" />
      : <Button type="linkTo" cta="More Videos" linkTo="/videos" />
  }

  render () {
    return (
      <div className="videoList_wrapper">
        {this.renderTitle()}
        {this.renderButton()}
      </div>
    )
  }
}

export default VideosList
