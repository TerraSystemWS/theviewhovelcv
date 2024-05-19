'use client'

export default function Footer() {
  return (
    <>
      <div className="footer__area">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 sm-mb-30">
              <div className="footer__area-widget">
                <div className="footer__area-widget-about">
                  <div className="footer__area-widget-about-logo">
                    <a href="index.html">
                      <img src="assets/img/logo.png" alt="" />
                    </a>
                  </div>
                  <p>
                    Desfrutar de um hotel luxuoso é como ser abraçado pelo
                    conforto em cada momento da sua estadia.
                  </p>
                  <div className="footer__area-widget-about-social">
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
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 lg-mb-30">
              <div className="footer__area-widget">
                <h5>Information</h5>
                <div className="footer__area-widget-contact">
                  <div className="footer__area-widget-contact-item">
                    <div className="footer__area-widget-contact-item-icon">
                      <i className="fal fa-map-marked-alt"></i>
                    </div>
                    <div className="footer__area-widget-contact-item-content">
                      <span>
                        <a
                          href="https://maps.app.goo.gl/nUaTPjursXBXHYoz5"
                          target="_blank"
                        >
                          Alto Vale dos cavaleiros, Sao Filipe, Fogo
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="footer__area-widget-contact-item">
                    <div className="footer__area-widget-contact-item-icon">
                      <i className="fal fa-envelope-open-text"></i>
                    </div>
                    <div className="footer__area-widget-contact-item-content">
                      <span>
                        <a href="mailto:reservas@theviewhotelcv.com">
                          reservas@theviewhotelcv.com
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="footer__area-widget-contact-item">
                    <div className="footer__area-widget-contact-item-icon">
                      <i className="fal fa-phone-alt"></i>
                    </div>
                    <div className="footer__area-widget-contact-item-content">
                      <span>
                        <a href="tel:002389896169">+238 989 61 69</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 sm-mb-30">
              <div className="footer__area-widget">
                <h5>Pages Links</h5>
                <div className="footer__area-widget-menu">
                  <ul>
                    <li>
                      <a href="services-details.html">
                        <i className="fal fa-angle-double-right"></i>Room
                        Cleaning
                      </a>
                    </li>
                    <li>
                      <a href="services-details.html">
                        <i className="fal fa-angle-double-right"></i>Restaurant
                      </a>
                    </li>
                    <li>
                      <a href="services-details.html">
                        <i className="fal fa-angle-double-right"></i>Swimming
                        pool
                      </a>
                    </li>
                    <li>
                      <a href="services-details.html">
                        <i className="fal fa-angle-double-right"></i>Gamming
                        Room
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-7 col-sm-8">
              <div className="footer__area-widget">
                <h5>Subscribe</h5>
                <div className="footer__area-widget-subscribe">
                  <form action="#">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                    <button type="submit">
                      <i className="fal fa-hand-pointer"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright__area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-7 md-mb-10">
                <div className="copyright__area-left md-t-center">
                  <p>
                    Copyright © 2022{' '}
                    <a href="https://themeforest.net/user/themeori/portfolio">
                      ThemeOri
                    </a>{' '}
                    Website by <a href="index.html">TerraSystem</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-5">
                <div className="copyright__area-right t-right md-t-center">
                  <ul>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
