import React from 'react'
import Link from 'next/link'

const About: React.FC = () => {
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
                <h1>About Us</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <span>-</span>About Us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Banner End --> */}
      {/* <!-- Company Offers Start --> */}
      <div className="offers__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">The View Hotel</span>
                <h2>
                  Book now and save time to enjoy the hotel and the island
                </h2>
                <p>
                  At the top of the Vale dos Cavaleiros Port, located 4km from
                  São Filipe, The View Hotel, privileged by nature, giving the
                  feeling of being in a tropical paradise, the Hotel overlooks
                  the horizon with a stunning view of the sea and our
                  magnificent Brava Island.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-image">
                <img
                  className="img__full"
                  src="/assets/img/theview.jpeg"
                  alt="the view hotel Foto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Company Offers End --> */}
    </>
  )
}

export default About
