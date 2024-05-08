import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
    <head>
      {/* <!-- Start Meta --> */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="description" content="Hostily - Luxury Hotel Booking HTML5 Template"/>
      <meta name="keywords" content="Creative, Digital, multipage, landing, freelancer template"/>
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
      <div className="theme-loader">
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
      {/* <!-- Preloader end -->
 <!-- Coming Soon Start End --> */}
      {children}
      {/* <!-- Coming Soon Area End --> 	 */}
      {/* <!-- Scroll Btn Start --> */}
      <div className="scroll-up">
        <svg className="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102"><path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" /> </svg>
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
  );
}
