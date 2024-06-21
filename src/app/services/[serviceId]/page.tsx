import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import serviceData from '@/data/aluguerData'

export default function Page({ params }: any) {
  const filteredDeluxeData = serviceData.filter(
    (item) => item.slug === params.serviceId
  )

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
                <h1>Services Details</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <span>-</span>Services Details
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Banner End --> */}
      {/* <!-- Services Details Start --> */}
      <div className="services__details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-4 col-lg-4 lg-mb-30">
              <div className="all__sidebar">
                {/* <div className="all__sidebar-item">
                  <h5>Category</h5>
                  <div className="all__sidebar-item-category">
                    <ul>
                      <li>
                        <a href="services-details.html">
                          <i className="far fa-angle-double-right"></i>Small
                          Suite<span>(06)</span>
                        </a>
                      </li>
                      <li>
                        <a className="active" href="services-details.html">
                          <i className="far fa-angle-double-right"></i>Luxury
                          Room<span>(08)</span>
                        </a>
                      </li>
                      <li>
                        <a href="services-details.html">
                          <i className="far fa-angle-double-right"></i>Single
                          <span>(05)</span>
                        </a>
                      </li>
                      <li>
                        <a href="services-details.html">
                          <i className="far fa-angle-double-right"></i>Family
                          <span>(09)</span>
                        </a>
                      </li>
                      <li>
                        <a href="services-details.html">
                          <i className="far fa-angle-double-right"></i>Double
                          Room<span>(03)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div
                  className="all__sidebar-item-help mt-30"
                  data-background="/assets/img/hotel/hotel-9.jpg"
                >
                  <div className="all__sidebar-item-help-icon">
                    <i className="fal fa-phone-alt"></i>
                  </div>
                  <h5>Easy solutions to our services</h5>
                  <div className="all__sidebar-item-help-contact">
                    <div className="all__sidebar-item-help-contact-content">
                      <span>Quick Help</span>
                      <h6>
                        <Link href="tel:002389896169">+238 989 61 69</Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-8">
              <div className="services__details-left">
                <div className="services__details-left-image mb-30">
                  <Image
                    src={filteredDeluxeData[0].image}
                    alt=""
                    width={1260}
                    height={700}
                  />
                </div>
                <div className="services__details-left-content">
                  <h2 className="mb-30">{filteredDeluxeData[0].name}</h2>
                  <p className="mb-0">{filteredDeluxeData[0].description}</p>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services Details End --> */}
    </>
  )
}
