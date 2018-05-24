import React from 'react'
import PropTypes from 'prop-types'

const TeamInfo = ({ team }) => {
  return (
    <div className="articlesTeamHeader">
      <div className="left" style={{
        background: 'red'
      }}>
        img
      </div>
      <div className="right">
        <div><span>{team.city} {team.name}</span></div>
        <div><strong>W{team.stats[0].wins} - L{team.stats[0].defeats}</strong></div>
      </div>
    </div>
  )
}

TeamInfo.propTypes = {
  team: PropTypes.object
}

export default TeamInfo
