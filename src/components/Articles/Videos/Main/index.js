import React from 'react'
import VideosList from '../../../Widgets/VideosList'

const VideosMain = () => {
  return (
    <VideosList
      type="card"
      title={false}
      loadmore
      start={0}
      ammount={7} />
  )
}

export default VideosMain
