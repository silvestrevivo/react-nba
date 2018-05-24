import React from 'react'
import PropTypes from 'prop-types'

const TeamInfo = (props) => {
  return (
    <div className="articlesTeamHeader">
      <div className="left" style={{
        background: 'red'
      }}>
        img
      </div>
      <div className="right">
        <div><span>{props.team.city} {props.team.name}</span></div>
        <div><strong>W{props.team.stats[0].wins} - L{props.team.stats[0].defeats}</strong></div>
      </div>
    </div>
  )
}

TeamInfo.propTypes = {
  team: PropTypes.object
}

export default TeamInfo
