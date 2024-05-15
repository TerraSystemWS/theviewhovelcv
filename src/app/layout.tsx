import type { Metadata } from 'next'
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Start Meta --> */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Hostily - Luxury Hotel Booking HTML5 Template"
        />
        <meta
          name="keywords"
          content="Creative, Digital, multipage, landing, freelancer template"
        />
        <meta name="author" content="ThemeOri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <!-- Title of Site --> */}
        <title>Hostily - Luxury Hotel Booking HTML5 Template</title>
        {/* <!-- Favicons --> */}
        <link rel="icon" type="image/png" href="assets/img/favicon.png" />
        {/* <!-- Bootstrap CSS --> */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        {/* <!-- Font Awesome CSS -- /> */}
        <link rel="stylesheet" href="assets/css/all.css" />
        {/* <!-- Animate CSS -- /> */}
        <link rel="stylesheet" href="assets/css/animate.css" />
        {/* <!-- Nice Select CSS -- /> */}
        <link rel="stylesheet" href="assets/css/nice-select.css" />
        {/* <!-- Swiper Bundle CSS -- /> */}
        <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
        {/* <!-- Magnific Popup CSS -- /> */}
        <link rel="stylesheet" href="assets/css/magnific-popup.css" />
        {/* <!-- Mean Menu CSS -- /> */}
        <link rel="stylesheet" href="assets/css/meanmenu.min.css" />
        {/* <!-- Custom CSS -- /> */}
        <link rel="stylesheet" href="assets/sass/style.css" />
      </head>

      <body>
        {/* <!-- Preloader start --> */}
        {/* <div className="theme-loader">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div> */}
        {/* <!-- Preloader end --> */}
        <div className="header__sticky">
          <div className="header__area">
            <div className="container custom__container">
              <div className="header__area-menubar">
                <div className="header__area-menubar-left">
                  <div className="header__area-menubar-left-logo">
                    <a href="index.html">
                      <img src="assets/img/logo.png" alt="" />
                    </a>
                    <div className="responsive-menu"></div>
                  </div>
                </div>
                <div className="header__area-menubar-right">
                  <div className="header__area-menubar-right-menu menu-responsive">
                    <ul id="mobilemenu">
                      <li className="menu-item-has-children">
                        <a href="#">Home</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="index.html">Home 01</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home 02</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home 03</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="services-team.html">Team</a>
                          </li>
                          <li>
                            <a href="services-details.html">Services Details</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Coming Soon</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Room</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="room-style.html">Room Style</a>
                          </li>
                          <li>
                            <a href="room-modern.html">Room Modern</a>
                          </li>
                          <li>
                            <a href="room-list.html">Room List</a>
                          </li>
                          <li>
                            <a href="room-details.html">Room Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-standard.html">Blog Standard</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header__area-menubar-right-box">
                  <div className="header__area-menubar-right-box-btn">
                    <a className="theme-btn" href="contact.html">
                      Book Now<i className="fal fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Header Area End -->	 */}
        {/* <!-- Start End --> */}
        {children}
        {/* <!--  Area End --> 	 */}
        {/* <!-- Footer Area Start -->	 */}
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
                          <a href="#">
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
                          <a href="mailto:help.info@gamil.com">
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
                          <a href="tel:+123(458)585568">+238 989 61 69</a>
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
                          <i className="fal fa-angle-double-right"></i>Car
                          Parking
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
                          <i className="fal fa-angle-double-right"></i>Fitness
                          Gym
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
        {/* <!-- Footer Area End -->	 */}
        {/* <!-- Scroll Btn Start --> */}
        <div className="scroll-up">
          <svg
            className="scroll-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />{' '}
          </svg>
        </div>
        {/* <!-- Scroll Btn End --> */}
        {/* <!-- Main JS --> */}
        <script src="assets/js/jquery-3.6.0.min.js" defer></script>
        {/* <!-- Bootstrap JS --> */}
        <script src="assets/js/bootstrap.min.js" defer></script>
        {/* <!-- Counter Up JS --> */}
        <script src="assets/js/jquery.counterup.min.js" defer></script>
        {/* <!-- Popper JS --> */}
        <script src="assets/js/popper.min.js" defer></script>
        {/* <!-- Magnific Popup JS --> */}
        <script src="assets/js/jquery.magnific-popup.min.js" defer></script>
        {/* <!-- Nice Select JS --> */}
        <script src="assets/js/jquery.nice-select.min.js" defer></script>
        {/* <!-- Swiper Bundle JS --> */}
        <script src="assets/js/swiper-bundle.min.js" defer></script>
        {/* <!-- Waypoints JS --> */}
        <script src="assets/js/jquery.waypoints.min.js" defer></script>
        {/* <!-- Mean Menu JS --> */}
        <script src="assets/js/jquery.meanmenu.min.js" defer></script>
        {/* <!-- Isotope JS --> */}
        <script src="assets/js/isotope.pkgd.min.js" defer></script>
        {/* <!-- Countdown JS --> */}
        {/* <script src="assets/js/countdown.js"></script> */}
        {/* <!-- Custom JS --> */}
        <script src="assets/js/custom.js" defer></script>
      </body>
    </html>
  )
}
