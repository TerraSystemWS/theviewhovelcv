'use client'
import React from 'react'
import Link from 'next/link'
import deluxeData from '@/data/deluxeData'
import Image from 'next/image'
import FAQ from '@/components/FAQ'
import faqData from '@/data/faqData'

export default function Page({ params }: any) {
  const filteredDeluxeData = deluxeData.filter(
    (item) => item.slug === params.roomId
  )

  // console.log(filteredDeluxeData)

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
                <h1>{filteredDeluxeData[0].roomType}</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <span> - </span>
                      <Link href="/room-list">Room List</Link>
                    </li>
                    <li>
                      <span> - </span>
                      {params.roomId}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Banner End --> */}
      {/* <!-- Room Details Start --> */}
      <div className="room__details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 lg-mb-30">
              <div className="all__sidebar">
                <div className="all__sidebar-item">
                  <h5>Your Price</h5>
                  <div className="all__sidebar-item-price">
                    <ul>
                      <li>
                        <i className="fal fa-bed-alt"></i>(
                        {filteredDeluxeData[0].beds}) bed&apos;s
                      </li>
                      <li>
                        <i className="fal fa-users"></i>(
                        {filteredDeluxeData[0].guests}) Guest&apos;s
                      </li>
                    </ul>
                    <h4>
                      {filteredDeluxeData[0].price}$00<span>/Night</span>
                    </h4>
                    <Link className="theme-btn" href="/contact">
                      Book Now<i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="all__sidebar-item">
                  <h5>Category</h5>
                  <div className="all__sidebar-item-category">
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="far fa-angle-double-right"></i>Luxury
                          Room<span>(00)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="far fa-angle-double-right"></i>Small
                          Suite<span>(00)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="far fa-angle-double-right"></i>Single
                          <span>(00)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="far fa-angle-double-right"></i>Family
                          <span>(00)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="far fa-angle-double-right"></i>Double
                          Room<span>(00)</span>
                        </Link>
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
                    <Link className="theme-btn" href="#">
                      Check<i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="room__details-right">
                <div className="room__details-right-content">
                  <h3 className="mb-25">
                    {/* Luxury Room is the best online room for luxury hotels */}
                    {filteredDeluxeData[0].roomType}
                  </h3>
                  <p className="mb-25">{filteredDeluxeData[0].description}</p>
                  {/* <p className="m-0">
                    id molestie ex ornare. Aliquam id arcu vel sem pretium
                    porttitor non maximus diam. Quisque urna turpis, euismod sed
                    elementum vel, pellentesque eu eros. Orci varius natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus musc.
                  </p> */}
                  {/* aqui vai ficar a galeria */}
                  <div className="row mt-35 mb-35">
                    <div className="col-sm-6 sm-mb-30">
                      {/* 465x300 */}
                      <Image
                        className="img__full"
                        src={filteredDeluxeData[0].imageUrl}
                        alt={filteredDeluxeData[0].slug}
                        width={465}
                        height={300}
                      />
                    </div>
                    <div className="col-sm-6">
                      <Image
                        className="img__full"
                        src={filteredDeluxeData[0].imageUrl}
                        alt={filteredDeluxeData[0].slug}
                        width={465}
                        height={300}
                      />
                    </div>
                  </div>
                  {/* fim da galeria */}
                  <h3 className="mb-25">Special check-in instructions</h3>
                  <p className="mb-25">
                    Dear guest, upon arrival, please inform us if you anticipate
                    arriving earlier or later than planned so that our team can
                    prepare a warm and attentive welcome. If you have any
                    special requests, please let us know in advance. We are here
                    to make your stay comfortable and excellent. Thank you for
                    your cooperation to ensure everything goes smoothly. Please
                    bring your ID and credit card for a worry-free stay.
                  </p>
                  {/* <p className="m-0">
                    id molestie ex ornare. Aliquam id arcu vel sem pretium
                    porttitor non maximus diam. Quisque urna turpis, euismod sed
                    elementum vel, pellentesque eu eros. Orci varius natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus musc.
                  </p> */}
                </div>
                <div className="room__details-right-list">
                  <h3>Amenities</h3>
                  <div className="row mt-35">
                    <div className="col-md-4 col-sm-6 mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/assets/img/icon/list-1.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Room Cleanig</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/assets/img/icon/list-2.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Car Parking</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/assets/img/icon/list-3.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Swimming pool</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/assets/img/icon/list-4.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Pick Up & Drop</h6>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-md-4 col-sm-6 md-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/assets/img/icon/list-5.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Spa Center</h6>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/assets/img/icon/list-6.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Smart Key</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 md-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/assets/img/icon/list-7.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Home Wifi</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/assets/img/icon/list-8.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Breakfast</h6>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-md-4 col-sm-6">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/assets/img/icon/list-9.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Fitness Gym</h6>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                {/* frequently asked queantions */}
                <FAQ faqData={faqData} />
                {/* <div className="room__details-right-faq mt-50">
                  <div className="room__details-right-faq-item">
                    <div className="room__details-right-faq-item-card">
                      <div className="room__details-right-faq-item-card-header">
                        <h5>Do you pay before or after booking a hotel?</h5>
                        <i className="far fa-long-arrow-up"></i>
                      </div>
                      <div className="room__details-right-faq-item-card-header-content active">
                        <p>
                          Praesent non ullamcorper ligula. Proin a mi vitae
                          massa lacinia sollicitudin eget eu ante. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit.
                          Pellentesque consectetur rhoncus lobortis. Curabitur
                          sit amet velit sagittis, pellentesque diam euismod,
                          faucibus quam. Cras non rhoncus ipsum. Quisque mattis
                          arcu metus, a fermentum justo semper in.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="room__details-right-faq-item">
                    <div className="room__details-right-faq-item-card">
                      <div className="room__details-right-faq-item-card-header">
                        <h5>What documents are needed for hotel booking?</h5>
                        <i className="far fa-long-arrow-down"></i>
                      </div>
                      <div className="room__details-right-faq-item-card-header-content display-none">
                        <p>
                          Praesent non ullamcorper ligula. Proin a mi vitae
                          massa lacinia sollicitudin eget eu ante. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit.
                          Pellentesque consectetur rhoncus lobortis. Curabitur
                          sit amet velit sagittis, pellentesque diam euismod,
                          faucibus quam. Cras non rhoncus ipsum. Quisque mattis
                          arcu metus, a fermentum justo semper in.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="room__details-right-faq-item">
                    <div className="room__details-right-faq-item-card">
                      <div className="room__details-right-faq-item-card-header">
                        <h5>Do hotels charge your card before you check in?</h5>
                        <i className="far fa-long-arrow-down"></i>
                      </div>
                      <div className="room__details-right-faq-item-card-header-content display-none">
                        <p>
                          Praesent non ullamcorper ligula. Proin a mi vitae
                          massa lacinia sollicitudin eget eu ante. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit.
                          Pellentesque consectetur rhoncus lobortis. Curabitur
                          sit amet velit sagittis, pellentesque diam euismod,
                          faucibus quam. Cras non rhoncus ipsum. Quisque mattis
                          arcu metus, a fermentum justo semper in.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* end frequently asked queantions */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Room Details End --> */}
    </>
  )
}
