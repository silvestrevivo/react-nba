import React from 'react'
import PropTypes from 'prop-types'
import TeamInfo from '../../Elements/teamInfo'
import PostData from '../../Elements/postData'

const Header = ({ teamData, date, author }) => {
  const teamInfo = (team) => {
    return team ? (
      <TeamInfo team={team} />
    ) : null
  }

  const postData = (date, author) => (
    <PostData data={{ date, author }} />
  )

  return (
    <div>
      {teamInfo(teamData)}
      {postData(date, author)}
    </div>
  )
}

Header.propTypes = {
  teamData: PropTypes.object,
  date: PropTypes.string,
  author: PropTypes.string
}

export default Header
