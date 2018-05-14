import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import axios from 'axios'

class NewsList extends Component {
  state = {
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  componentDidMount () {
    this.request(this.state.start, this.state.end)
  }

  request = (start, end) => {
    axios.get(`http://localhost:3000/articles?_start=${start}&_end=${end}`)
      .then(response => {
        this.setState({
          items: [...this.state.items, ...response.data]
        })
      })
  }

  loadMore = () => {
    let end = this.state.end + this.state.amount
    this.request(this.state.end, end)
  }

  renderNews = (type) => {
    let template = null
    switch (type) {
      case 'card':
        template = this.state.items.map((item, i) => {
          return (
            <div key={i}>
              <div className="newsList_item">
                <Link to={`/articles/${item.id}`}>
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          )
        })
        break
      default:
        template = null
    }
    return template
  }

  render () {
    return (
      <div>
        {this.renderNews(this.props.type)}
        <div onClick={this.loadMore}>
          LOAD MORE
        </div>
      </div>
    )
  }
}

NewsList.propTypes = {
  start: PropTypes.number,
  amount: PropTypes.number,
  type: PropTypes.string
}

export default NewsList
