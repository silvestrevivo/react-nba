import React from 'react'
import PropTypes from 'prop-types'

const PostData = ({ data }) => {
  return (
    <div className="articlePostData">
      <div>
        Date:
        <span>{data.date}</span>
      </div>
      <div>
        Author:
        <span>{data.author}</span>
      </div>
    </div>
  )
}

PostData.propTypes = {
  data: PropTypes.object
}

export default PostData
