import React from 'react'
import PropTypes from 'prop-types'

const Body = ({ article }) => {
  return (
    <div className="videoWrapper">
      <h1>{article.title}</h1>
      <iframe
        title="videoplayer"
        width="100%"
        height="300px"
        src={`https://www.youtube.com/embed/${article.url}`}
        frameBorder="0" />
    </div>
  )
}

Body.propTypes = {
  article: PropTypes.object
}

export default Body
