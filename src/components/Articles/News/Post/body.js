import React from 'react'
import PropTypes from 'prop-types'

const Body = ({ article }) => {
  return (
    <div className="body">
      <h1>{article.title}</h1>
      <div className="articleImage" style={{ background: 'red' }} />
      <div className="articleText">
        {article.body}
      </div>
    </div>
  )
}

Body.propTypes = {
  article: PropTypes.object
}

export default Body
