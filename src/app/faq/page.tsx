import React from 'react'
import FAQ from '@/components/FAQ'
import Link from 'next/link'
import faqData from '../../data/faqData' // Importando os dados de FAQ

const App: React.FC = () => {
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
                <h1>Frequently Asked Questions</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <span>-</span>Faq
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
              <FAQ faqData={faqData} />
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

export default App
