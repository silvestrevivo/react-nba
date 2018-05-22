import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CardInfo from '../CardInfo'

const VideosListTemplate = (props) => {
  return props.data.map((item, i) => {
    return (
      <Link to={`/videos/${item.id}`} key={i}>
        <div className="videoListItem_wrapper">
          <div className="left" style={{ background: 'red' }}>
            <div />
          </div>
          <div className="right">
            <CardInfo teams={props.teams} team={item.team} date={item.date} />
            <h2>{item.title}</h2>
          </div>
        </div>
      </Link>
    )
  })
}

VideosListTemplate.propTypes = {
  data: PropTypes.array
}

export default VideosListTemplate
