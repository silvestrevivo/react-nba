import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import CardInfo from '../CardInfo'
import image0 from '../../../../assets/img/videos/1.jpeg'
import image1 from '../../../../assets/img/videos/2.jpg'
import image2 from '../../../../assets/img/videos/3.jpg'
import image3 from '../../../../assets/img/videos/4.jpg'
import image4 from '../../../../assets/img/videos/5.jpg'
import image5 from '../../../../assets/img/videos/6.jpg'
import image6 from '../../../../assets/img/videos/7.jpg'
import image7 from '../../../../assets/img/videos/8.jpg'
import image8 from '../../../../assets/img/videos/9.jpg'
import image9 from '../../../../assets/img/videos/10.jpg'

const image = {
  '0': image0,
  '1': image1,
  '2': image2,
  '3': image3,
  '4': image4,
  '5': image5,
  '6': image6,
  '7': image7,
  '8': image8,
  '9': image9
} // this way importing images to make compatible with parceljs

const VideosListTemplate = (props) => {
  return props.data.map((item, i) => {
    return (
      <Link to={`/videos/${item.id}`} key={i}>
        <div className="videoListItem_wrapper">
          <div className="left" style={{ backgroundImage: `url('${image[i]}')` }}>
            <div />
          </div>
          <div className="right">
            <CardInfo teams={props.teams} team={item.team} date={item.date} />
            <h2>{item.title}</h2>
          </div>
        </div>
      </Link>
    )
  })
}

VideosListTemplate.propTypes = {
  data: PropTypes.array
}

export default VideosListTemplate
