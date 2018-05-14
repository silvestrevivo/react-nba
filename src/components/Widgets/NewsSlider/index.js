import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SliderTemplates from './sliderTemplates'
import axios from 'axios'

class NewsSlider extends Component {
  state = {
    news: []
  }

  componentDidMount () {
    axios.get(`http://localhost:3000/articles?_start=${this.props.start}&_end=${this.props.end}`)
      .then(response => {
        this.setState({
          news: response.data
        })
      })
  }

  render () {
    return (
      <SliderTemplates
        data={this.state.news}
        type={this.props.type}
        settings={this.props.settings} />
    )
  }
}

NewsSlider.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
  type: PropTypes.string,
  settings: PropTypes.object
}

export default NewsSlider
