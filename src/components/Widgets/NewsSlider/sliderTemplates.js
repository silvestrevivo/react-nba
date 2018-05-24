import React from 'react'
import PropTypes from 'prop-types'
import Slick from 'react-slick'
import { Link } from 'react-router-dom'
import image0 from '../../../../assets/img/articles/1.jpeg'
import image1 from '../../../../assets/img/articles/2.jpg'
import image2 from '../../../../assets/img/articles/3.jpg'

const image = {
  '0': image0,
  '1': image1,
  '2': image2
} // this way importing images to make compatible with parceljs

const SliderTemplates = ({ data, type, settings }) => {
  let template = null

  const settingsSlider = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    ...settings
  }

  switch (type) {
    case 'featured':
      template = data.map((item, i) => {
        return (
          <div key={i}>
            <div className="featured_item">
              <div className="featured_image"
                style={{ backgroundImage: `url('${image[i]}')` }} />
              <Link to={`/articles/${item.id}`}>
                <div className="featured_caption">
                  {item.title}
                </div>
              </Link>
            </div>
          </div>
        )
      })
      break
    default:
      template = null
  }

  return (
    <Slick {...settingsSlider}>
      {template}
    </Slick>
  )
}

SliderTemplates.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
  settings: PropTypes.object
}
export default SliderTemplates
