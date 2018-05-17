import React from 'react'
import NewsSlider from '../../components/Widgets/NewsSlider'
import NewsList from '../Widgets/NewsList'
import VideosList from '../Widgets/VideosList'

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
      <NewsList
        type="card"
        loadmore
        start={3}
        amount={3} />
      <VideosList
        type="card"
        title
        loadmore={false}
        start={0}
        ammount={3}
      />
    </div>
  )
}

export default Home
