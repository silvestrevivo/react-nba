import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SliderTemplates from './sliderTemplates'
import axios from 'axios'

class NewsSlider extends Component {
  state = {
    news: []
  }

  componentDidMount () {
    const { start, end } = this.props
    axios.get(`http://localhost:3000/articles?_start=${start}&_end=${end}`)
      .then(response => {
        this.setState({
          news: response.data
        })
      })
  }

  render () {
    const { type, settings } = this.props
    return (
      <SliderTemplates
        data={this.state.news}
        type={type}
        settings={settings} />
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
