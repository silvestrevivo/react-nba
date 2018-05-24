import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = ({ type, loadMore, cta, linkTo }) => {
  let template = null

  switch (type) {
    case 'loadmore':
      template = (
        <div className="blue_btn" onClick={loadMore}>
          {cta}
        </div>
      )
      break
    case 'linkTo':
      template = (
        <Link to={linkTo}
          className="blue_btn" >
          {cta}
        </Link>
      )
      break
    default:
      template = null
  }
  return template
}

Button.propTypes = {
  type: PropTypes.string,
  loadMore: PropTypes.func,
  cta: PropTypes.string,
  linkTo: PropTypes.string
}

export default Button
