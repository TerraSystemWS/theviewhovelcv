import React from 'react'
import FAQ from '@/components/FAQ'
import Link from 'next/link'
import { FaqData } from '../../data/faqData' // Importando o tipo de dados de FAQ
import faqData from '../../data/faqData' // Importando os dados de FAQ

// const faqs = [
//   {
//     question: 'What is your return policy?',
//     answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     question: 'How can I track my order?',
//     answer:
//       'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
//   },
//   // Add more FAQ items as needed
// ]

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
                <h1>FAQ</h1>
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
