// PrivacyPolicyPage.tsx

import React from 'react'
import Link from 'next/link'

const Policy: React.FC = () => {
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
                <h1>Terms of Use</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <span>-</span>Privacy Policy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Banner End --> */}
      <div className="flex justify-center">
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10 m-5">
              <h1 className="m-5">Terms of Use</h1>
              <article>
                <p>
                  This Privacy Policy describes how your personal information is
                  collected, used, and shared when you visit or make a purchase
                  from our website.
                </p>

                <h2>Personal Information We Collect</h2>
                <p>
                  When you visit the website, we automatically collect certain
                  information about your device, including information about
                  your web browser, IP address, time zone, and some of the
                  cookies that are installed on your device. Additionally, as
                  you browse the site, we collect information about the web
                  pages or products that you view, which websites or search
                  terms referred you to the site, and information about how you
                  interact with the site. We refer to this
                  automatically-collected information as &quot;Device
                  Information&quot;.
                </p>

                <h2>Sharing Your Personal Information</h2>
                <p>
                  We do not share your Personal Information with third parties,
                  except to comply with laws, regulations, and legitimate
                  government requests.
                </p>

                <h2>Your Rights</h2>
                <p>
                  If you are a European resident, you have the right to access
                  personal information we hold about you and to ask that your
                  personal information be corrected, updated, or deleted. If you
                  would like to exercise this right, please contact us through
                  the contact information below.
                </p>

                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We reserve the right to modify this privacy policy at any
                  time. Changes and clarifications will take effect immediately
                  upon their posting on the website. If we make material changes
                  to this policy, we will notify you here that it has been
                  updated, so that you are aware of what information we collect,
                  how we use it, and under what circumstances, if any, we use
                  and/or disclose it.
                </p>

                <h2>Contact Us</h2>
                <p>
                  For more information about our privacy practices, if you have
                  questions, or if you would like to make a complaint, please
                  contact us by e-mail at{' '}
                  <a href="mailto:reservas@theviewhotelcv.com">
                    reservas@theviewhotelcv.com
                  </a>{' '}
                  or by mail using the details provided below:
                </p>
                <p>
                  <strong>The View Hotel</strong>
                  <br />
                  Alto Vale dos cavaleiros, Sao Filipe, Fogo
                  <br />
                  Phone: (+238) 989 61 69
                </p>
              </article>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
      {/* <div className="App">
    </div> */}
    </>
  )
}

export default Policy
