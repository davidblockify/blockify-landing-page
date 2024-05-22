import React from 'react'
import './style.css'

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay muted loop>
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
      <div className="blur-overlay" style={{ backgroundColor: 'black' }} />
    </div>
  )
}
export default BackgroundVideo
