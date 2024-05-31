import React from 'react'
import Link from 'next/link'

const TermsOfUsePage: React.FC = () => {
  return (
    <>
      <div
        className="page__banner"
        data-background="/assets/img/banner/page-banner-9.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Contact Us</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <span>-</span>terms of use
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accommodations__area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 ">
              <div className="accommodations__area-title">
                <div className="terms-of-use">
                  <h1>Terms of Use</h1>
                  <p>
                    These terms and conditions outline the rules and regulations
                    for the use of TheViewHotel&apos;s Website.
                    <br />
                    By accessing this website we assume you accept these terms
                    and conditions. Do not continue to use TheViewHotel if you
                    do not agree to take all of the terms and conditions stated
                    on this page.
                  </p>
                  <p>
                    The following terminology applies to these Terms and
                    Conditions, Privacy Statement and Disclaimer Notice and all
                    Agreements: &quot;Client&quot;, &quot;You&quot; and
                    &quot;Your&quot; refers to you, the person log on this
                    website and compliant to the Company&apos;s terms and
                    conditions. &quot;The Company&quot;, &quot;Ourselves&quot;,
                    &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers
                    to our Company. &quot;Party&quot;, &quot;Parties&quot;, or
                    &quot;Us&quot;, refers to both the Client and ourselves. All
                    terms refer to the offer, acceptance and consideration of
                    payment necessary to undertake the process of our assistance
                    to the Client in the most appropriate manner for the express
                    purpose of meeting the Client&apos;s needs in respect of
                    provision of the Company&apos;s stated services, in
                    accordance with and subject to, prevailing law of
                    Netherlands. Any use of the above terminology or other words
                    in the singular, plural, capitalization and/or he/she or
                    they, are taken as interchangeable and therefore as
                    referring to same.
                  </p>
                  <h2>Cookies</h2>
                  <p>
                    We employ the use of cookies. By accessing TheViewHotel, you
                    agreed to use cookies in agreement with the
                    TheViewHotel&apos;s Privacy Policy.
                  </p>
                  <h2>License</h2>
                  <p>
                    Unless otherwise stated, TheViewHotel and/or its licensors
                    own the intellectual property rights for all material on
                    TheViewHotel. All intellectual property rights are reserved.
                    You may access this from TheViewHotel for your own personal
                    use subjected to restrictions set in these terms and
                    conditions.
                  </p>
                  {/* Add more sections as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsOfUsePage
