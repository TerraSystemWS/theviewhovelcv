// 'use client'
import Banner from '@/components/home/Banner'
import Accommodations from '@/components/home/Accommodations'
import accommodationsData from '@/data/accommodationsData' // importacao de dados
import DeluxeArea from '@/components/home/DeluxeArea'
import deluxeData from '@/data/deluxeData' // importacao de dados
import VideoArea from '@/components/home/VideoArea'
import videoareaData from '@/data/videoareaData' //importacao de dados
import FeatureArea from '@/components/home/FeatureArea'
import features from '@/data/features' // import data

// Data object
const bannerData = {
  title: 'The Best Hotel',
  subtitle: 'Deals in Fogo',
  imageLink: 'assets/fotos/banner-1.jpg',
  videoLink: 'https://www.youtube.com/watch?v=JhVtUBct7ik',
}

export default function Home() {
  return (
    <>
      {/* <!-- Banner Area Start -->	 */}
      <Banner
        title={bannerData.title}
        subtitle={bannerData.subtitle}
        imageLink={bannerData.imageLink}
        videoLink={bannerData.videoLink}
      />
      {/* <!-- Banner Area End --> */}
      {/* <!-- Accommodations Area Start --> */}
      <Accommodations {...accommodationsData} />
      {/* <!-- Accommodations Area End --> */}
      {/* <!-- Deluxe Area Start --> */}

      <DeluxeArea deluxeData={deluxeData} />

      {/* <!-- Deluxe Area End --> */}
      {/* <!-- Video Area Start --> */}
      <VideoArea {...videoareaData} />
      {/* <!-- Video Area End --> */}
      {/* <!-- Services Area Start --> */}
      <div className="services__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 lg-mb-30">
              <div className="services__area-item">
                <div className="services__area-item-icon">
                  <img src="assets/img/icon/cleaning.png" alt="" />
                </div>
                <div className="services__area-item-content">
                  <h5>
                    <a href="#">Room Cleaning</a>
                  </h5>
                  <p>
                    Proin massa augue, lacinia at blandit ac, fringilla
                    scelerisque tortor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 sm-mb-30">
              <div className="services__area-item">
                <div className="services__area-item-icon">
                  <img src="assets/img/icon/wifi.png" alt="" />
                </div>
                <div className="services__area-item-content">
                  <h5>
                    <a href="#">Room Wifi</a>
                  </h5>
                  <p>
                    Proin massa augue, lacinia at blandit ac, fringilla
                    scelerisque tortor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="services__area-item">
                <div className="services__area-item-icon">
                  <img src="assets/img/icon/location.png" alt="" />
                </div>
                <div className="services__area-item-content">
                  <h5>
                    <a href="#">Pickup & Drop</a>
                  </h5>
                  <p>
                    Proin massa augue, lacinia at blandit ac, fringilla
                    scelerisque tortor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services Area End --> */}
      {/* <!-- Feature Area Start  --> */}

      <FeatureArea features={features} />
      {/* <!-- Feature Area End --> */}
      {/* <!-- Testimonial Area Start -->	 */}
      <div className="testimonial__area section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="testimonial__area-bg">
                <div className="swiper testimonial__slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial__area-item">
                        <div className="testimonial__area-item-image">
                          <img
                            className="img__full"
                            src="assets/img/avatar/testimonial-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="testimonial__area-item-content">
                          <h4>David Beckham</h4>
                          <span>UX Designer</span>
                          <p>
                            Proin massa augue, lacinia at blandit ac, fringilla
                            scelerisque tortor. Mauris sit amet lectus porta,
                            porta lectus non, malesuada neque. Integer in tempus
                            leo. Quisque vitae leo ac ex suscipit iaculis eu in
                            nisl. Donec vestibulum volutpat lectus, vel aliquet
                            massa porttitor in. Integer eleifend
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__area-item">
                        <div className="testimonial__area-item-image">
                          <img
                            className="img__full"
                            src="assets/img/avatar/testimonial-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="testimonial__area-item-content">
                          <h4>David Fincher</h4>
                          <span>UX Designer</span>
                          <p>
                            Proin massa augue, lacinia at blandit ac, fringilla
                            scelerisque tortor. Mauris sit amet lectus porta,
                            porta lectus non, malesuada neque. Integer in tempus
                            leo. Quisque vitae leo ac ex suscipit iaculis eu in
                            nisl. Donec vestibulum volutpat lectus, vel aliquet
                            massa porttitor in. Integer eleifend
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__area-item">
                        <div className="testimonial__area-item-image">
                          <img
                            className="img__full"
                            src="assets/img/avatar/testimonial-3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="testimonial__area-item-content">
                          <h4>Ridley Scott</h4>
                          <span>UX Designer</span>
                          <p>
                            Proin massa augue, lacinia at blandit ac, fringilla
                            scelerisque tortor. Mauris sit amet lectus porta,
                            porta lectus non, malesuada neque. Integer in tempus
                            leo. Quisque vitae leo ac ex suscipit iaculis eu in
                            nisl. Donec vestibulum volutpat lectus, vel aliquet
                            massa porttitor in. Integer eleifend
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial__area-item-dots">
                  <div className="pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial Area End -->	 */}
      {/* <!-- Blog Area Start -->	 */}
      <div className="blog__area section-padding">
        <div className="container">
          <div className="row mb-60">
            <div className="col-xl-12">
              <div className="blog__area-title">
                <span className="subtitle__one">Our Blog</span>
                <h2>Read Our Blog amd News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 xl-mb-30">
              <div className="blog__area-item">
                <div className="blog__area-item-image">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/blog-1.jpg" alt="" />
                  </a>
                </div>
                <div className="blog__area-item-content">
                  <div className="blog__area-item-content-box">
                    <div className="blog__area-item-content-box-date">
                      <h3>27</h3>
                      <span>July 2022</span>
                    </div>
                    <div className="blog__area-item-content-box-title">
                      <h5>
                        <a href="blog-details.html">
                          The ultimate guide to finding the best hotels in your
                          area.
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div className="blog__area-item-content-btn">
                    <a className="simple-btn-2" href="blog-details.html">
                      Read More
                      <i className="fal fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 lg-mb-30">
              <div className="blog__area-item blog__area-item-hover">
                <div className="blog__area-item-image">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/blog-2.jpg" alt="" />
                  </a>
                </div>
                <div className="blog__area-item-content">
                  <div className="blog__area-item-content-box">
                    <div className="blog__area-item-content-box-date">
                      <h3>27</h3>
                      <span>July 2022</span>
                    </div>
                    <div className="blog__area-item-content-box-title">
                      <h5>
                        <a href="blog-details.html">
                          Book a room Today most Affordable Rates.
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div className="blog__area-item-content-btn">
                    <a className="simple-btn-2" href="blog-details.html">
                      Read More
                      <i className="fal fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="blog__area-item">
                <div className="blog__area-item-image">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/blog-3.jpg" alt="" />
                  </a>
                </div>
                <div className="blog__area-item-content">
                  <div className="blog__area-item-content-box">
                    <div className="blog__area-item-content-box-date">
                      <h3>27</h3>
                      <span>July 2022</span>
                    </div>
                    <div className="blog__area-item-content-box-title">
                      <h5>
                        <a href="blog-details.html">
                          Hotel Booking is the best choice for hotel booking.
                        </a>
                      </h5>
                    </div>
                  </div>
                  <div className="blog__area-item-content-btn">
                    <a className="simple-btn-2" href="blog-details.html">
                      Read More
                      <i className="fal fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog Area End -->	 */}
    </>
  )
}
