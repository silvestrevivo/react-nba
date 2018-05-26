import React from 'react'
import PropTypes from 'prop-types'
import VideosListTemplate from './VideosTemplate'

const VideosRelated = ({ data, teams }) => {
  return (
    <div className="relatedWrapper">
      <VideosListTemplate data={data} teams={teams} />
    </div>
  )
}

VideosRelated.propTypes = {
  data: PropTypes.array,
  teams: PropTypes.array
}

export default VideosRelated
