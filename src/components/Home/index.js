import React from 'react'
import NewsSlider from '../../components/Widgets/NewsSlider'

const Home = () => {
  return (
    <div>
      <NewsSlider
        // these options might be used on different places
        // to get another slider with the same source code
        type="featured"
        start={0}
        end={3}
        settings={{
          dots: false
        }} />
    </div>
  )
}

export default Home
