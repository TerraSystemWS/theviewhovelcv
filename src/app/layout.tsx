import type { Metadata } from 'next'
import Script from 'next/script'
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'The View Hotel',
  description: 'in fogo island',
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
        <title>The View Hotel - Luxury Hotel </title>
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
        <div className="theme-loader">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
        {/* <!-- Preloader end --> */}
        <Header />
        {/* <!-- Header Area End -->	 */}
        {/* <!-- Start End --> */}
        {children}
        {/* <!--  Area End --> 	 */}
        {/* <!-- Footer Area Start -->	 */}
        <Footer />
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
        <Script src="assets/js/jquery-3.6.0.min.js"></Script>
        {/* <!-- Bootstrap JS --> */}
        <Script src="assets/js/bootstrap.min.js"></Script>
        {/* <!-- Counter Up JS --> */}
        <Script src="assets/js/jquery.counterup.min.js"></Script>
        {/* <!-- Popper JS --> */}
        <Script src="assets/js/popper.min.js"></Script>
        {/* <!-- Magnific Popup JS --> */}
        <Script src="assets/js/jquery.magnific-popup.min.js"></Script>
        {/* <!-- Nice Select JS --> */}
        <Script src="assets/js/jquery.nice-select.min.js"></Script>
        {/* <!-- Swiper Bundle JS --> */}
        <Script src="assets/js/swiper-bundle.min.js"></Script>
        {/* <!-- Waypoints JS --> */}
        <Script src="assets/js/jquery.waypoints.min.js"></Script>
        {/* <!-- Mean Menu JS --> */}
        <Script src="assets/js/jquery.meanmenu.min.js"></Script>
        {/* <!-- Isotope JS --> */}
        <Script src="assets/js/isotope.pkgd.min.js"></Script>
        {/* <!-- Countdown JS --> */}
        {/* <Script src="assets/js/countdown.js"></Script> */}
        {/* <!-- Custom JS --> */}
        <Script src="assets/js/custom.js"></Script>
      </body>
    </html>
  )
}
