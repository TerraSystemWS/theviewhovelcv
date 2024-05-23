import React from 'react'

const ContactArea: React.FC = () => {
  return (
    <>
      {/* <!-- Page Banner Start --> */}
      <div
        class="page__banner"
        data-background="assets/img/banner/page-banner-9.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="page__banner-title">
                <h1>Contact Us</h1>
                <div class="page__banner-title-menu">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <span>-</span>Contact Us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Banner End --> */}
      {/* <!-- Contact Area Start --> */}
      <div className="contact__area section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 lg-mb-30">
              <div className="contact__area-title">
                <h3 className="mb-25">Get In Touch</h3>
                <p>
                  Get in touch with us to explore all of our exclusive
                  accommodation options and services.
                </p>
              </div>
              <div className="contact__area-info">
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-phone-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Emergency Help</span>
                    <h6>
                      <a href="tel:002389896169">+238 989 61 69</a>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Quick Email</span>
                    <h6>
                      <a href="mailto:support@gamil.com">
                        reservas@theviewhotelcv.com
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Office Address</span>
                    <h6>
                      <a href="#">
                        Alto Vale dos cavaleiros, Sao Filipe, Fogo{' '}
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="contact__area-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="contact__area-form">
                <h3 className="mb-35">Send Massage</h3>
                <form
                  id="contact-form"
                  action="assets/form/mail.php"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-sm-6 mb-30">
                      <div className="contact__area-form-item">
                        <i className="fal fa-user"></i>
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 sm-mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-envelope-open"></i>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-phone-alt"></i>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 sm-mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-address-book"></i>
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-comments"></i>
                        <textarea
                          name="message"
                          placeholder="Type your comments...."
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact__area-form-item">
                        <button className="theme-btn" type="submit">
                          Submit Now<i className="fal fa-long-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact__area-map section-padding">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.234116092137!2d-24.504229424982658!3d14.924044485601604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93617772c2706c5%3A0x978929371573dc05!2sThe%20View%20Entertainment%20Center!5e0!3m2!1spt-PT!2scv!4v1716430731902!5m2!1spt-PT!2scv"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact Area End --> */}
    </>
  )
}

export default ContactArea
