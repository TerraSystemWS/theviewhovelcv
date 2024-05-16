export default function Header() {
  return (
    <>
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
    </>
  )
}
