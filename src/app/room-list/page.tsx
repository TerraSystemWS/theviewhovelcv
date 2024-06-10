import React from 'react'
import Link from 'next/link'
import RoomListItem from '@/components/roomList'
import deluxeData from '@/data/deluxeData'

const RoomList: React.FC = () => {
  return (
    <>
      {/* <!-- Page Banner Start --> */}
      <div
        className="page__banner"
        data-background="/assets/img/banner/page-banner-9.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Room List</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <span>-</span>Room List
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Banner End --> */}
      {/* <!-- Room List Start --> */}
      <div className="room__list section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="all__sidebar">
                <div className="all__sidebar-item">
                  <h5>Category</h5>
                  <div className="all__sidebar-item-category">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-double-right"></i>Suite
                          Room<span>(00)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-double-right"></i>Single
                          Room<span>(00)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-double-right"></i>Double
                          Room
                          <span>(00)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-angle-double-right"></i>Twin Room
                          <span>(00)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="all__sidebar-item">
                  <h5>Booking Now</h5>
                  <div className="all__sidebar-item-booking">
                    <div className="all__sidebar-item-booking-item mb-10">
                      <select name="select">
                        <option value="1">Check In</option>
                        <option value="2">Check In</option>
                        <option value="3">Check In</option>
                        <option value="4">Check In</option>
                        <option value="5">Check In</option>
                      </select>
                    </div>
                    <div className="all__sidebar-item-booking-item mb-10">
                      <select name="select">
                        <option value="1">Check Out</option>
                        <option value="2">Check Out</option>
                        <option value="3">Check Out</option>
                        <option value="4">Check Out</option>
                        <option value="5">Check Out</option>
                      </select>
                    </div>
                    <div className="all__sidebar-item-booking-item mb-30">
                      <select name="select">
                        <option value="1">Room</option>
                        <option value="2">1 Room</option>
                        <option value="3">2 Room</option>
                        <option value="4">3 Room</option>
                        <option value="5">4 Room</option>
                      </select>
                    </div>
                    <a className="theme-btn" href="#">
                      Check<i className="fal fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-xl-9 order-first order-xl-1 xl-mb-30">
              {/* <div className="room__list-item">
                <div className="room__list-item-left">
                  <div className="room__list-item-image">
                    <img src="assets/img/hotel/hotel-19.jpg" alt="" />
                  </div>
                </div>
                <div className="room__list-item-right">
                  <div className="room__list-item-right-content">
                    <h4>Superior Room</h4>
                    <p>
                      Savvy travelers are looking for more than just the next
                      destination on the map. They are looking for a memorable
                      experience.
                    </p>
                    <ul>
                      <li>
                        <i className="fal fa-bed-alt"></i>(3) bed's
                      </li>
                      <li>
                        <i className="fal fa-users"></i>(7) Guest's
                      </li>
                    </ul>
                  </div>
                  <div className="room__list-item-right-meta">
                    <div className="room__list-item-right-meta-top">
                      <span>$249/Night</span>
                      <p>
                        <i className="fas fa-star"></i>
                        <span>2.9</span>2k
                      </p>
                    </div>
                    <a className="simple-btn" href="#">
                      <i className="far fa-chevron-right"></i>Read More
                    </a>
                  </div>
                </div>
              </div> */}
              <RoomListItem data={deluxeData} />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Room List End --> */}
    </>
  )
}

export default RoomList
