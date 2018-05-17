import React from 'react'
import PropTypes from 'prop-types'
import FontAwseome from 'react-fontawesome'

const CardInfo = ({ teams, team, date }) => {
  const teamName = (teams, team) => {
    let data = teams.find((item) => {
      return item.id === team
    })
    if (data) {
      return data.name
    }
  }

  return (
    <div className="cardInfo">
      <span className="teamName">
        {teamName(teams, team)}
      </span>
      <span className="date">
        <FontAwseome name="clock-o" />
        {date}
      </span>
    </div>
  )
}

CardInfo.propTypes = {
  teams: PropTypes.array,
  team: PropTypes.number,
  date: PropTypes.str
}

export default CardInfo
