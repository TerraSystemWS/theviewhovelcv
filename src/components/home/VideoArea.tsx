import React from 'react'
import videoareaData from '@/data/videoareaData'
import { VideoareaData } from '@/data/videoareaData'

interface VideoAreaProps {
  title: string
  imageUrlbg: string
  videoLink: string
}

const VideoArea: React.FC<VideoAreaProps> = ({
  title,
  imageUrlbg,
  videoLink,
}) => {
  return (
    <div className="video__area" data-background={imageUrlbg}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-7 col-lg-8">
            <div className="video__area-title">
              <h2>{title}</h2>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-5 col-lg-4">
            <div className="video__area-right">
              <div className="video__play">
                <a className="video-popup" href={videoLink}>
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoArea
