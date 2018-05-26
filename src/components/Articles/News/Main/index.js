import React from 'react'

import NewsSlider from '../../../Widgets/NewsSlider'
import NewsList from '../../../Widgets/NewsList'

const NewsMain = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        settings={{ dots: false }}
        start={0}
        end={3} />
      <NewsList
        type="cardMain"
        loadMore
        start={3}
        amount={6}
      />
    </div>
  )
}

NewsMain.propTypes = {
  //
}

export default NewsMain
