'use client'
import React from 'react'
import SearchForm from '@/components/home/SearchForm'

interface BannerProps {
  title: string
  subtitle: string
  imageLink: string
  videoLink: string
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  imageLink,
  videoLink,
}) => {
  return (
    <div className="banner__area" data-background={imageLink}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="banner__area-title">
              <h1>
                {title}
                <span>{subtitle}</span>
              </h1>
              <div className="banner__area-title-video">
                <div className="video__play">
                  <a className="video-popup" href={videoLink}>
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <SearchForm />
          {/* <form action="#">
            <div className="check__area">
              <div className="check__area-item">
                <p>
                  Check In
                  <input id="date" type="date" />
                </p>
              </div>
              <div className="check__area-item">
                <p>
                  Check Out
                  <input id="date2" type="date" />
                </p>
              </div>
              <div className="check__area-item">
                <div className="check__area-item-room">
                  <p>Room</p>
                  <select name="select">
                    <option value="1">Suite Master </option>
                    <option value="2">Suite Térrea </option>
                    <option value="3">Double Room </option>
                    <option value="4">Single Room</option>
                  </select>
                </div>
              </div>
              <div className="check__area-item button">
                <button className="theme-btn" type="submit">
                  Check Now
                </button>
              </div>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  )
}

export default Banner
