import React from 'react'
import PropTypes from 'prop-types'

const PostData = (props) => {
  return (
    <div className="articlePostData">
      <div>
        Date:
        <span>{props.data.date}</span>
      </div>
      <div>
        Author:
        <span>{props.data.author}</span>
      </div>
    </div>
  )
}

PostData.propTypes = {
  data: PropTypes.object
}

export default PostData
