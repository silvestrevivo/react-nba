import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from '../../../components/Widgets/Buttons'
import CardInfo from '../CardInfo'

class NewsList extends Component {
  state = {
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
    teams: []
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
            <CSSTransition
              key={i}
              classNames={{
                enter: 'newsList_wrapper',
                enterActive: 'newsList_wrapper_enter'
              }}
              timeout={500}>
              <div>
                <div className="newsList_item">
                  <Link to={`/articles/${item.id}`}>
                    <CardInfo teams={this.state.teams} team={item.team} date={item.date} />
                    <h2>{item.title}</h2>
                  </Link>
                </div>
              </div>
            </CSSTransition>
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
        <TransitionGroup
          component="div"
          className="list"
        >
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button type="loadmore" loadMore={this.loadMore} cta="Load More News" />
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
