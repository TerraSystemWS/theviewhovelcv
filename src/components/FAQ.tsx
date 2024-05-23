'use client'
import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  faqs: FAQItem[]
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="accommodations__area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12 lg-mb-30">
            <div className="accommodations__area-title">
              <div className="faq__area" style={{ margin: '20px' }}>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="faq__item"
                    style={{ marginBottom: '20px' }}
                  >
                    <h3
                      className="faq__question"
                      style={{
                        backgroundColor: '#f0f0f0',
                        padding: '10px',
                        cursor: 'pointer',
                      }}
                      onClick={() => toggleFAQ(index)}
                    >
                      {faq.question}
                    </h3>
                    {openIndex === index && (
                      <p className="faq__answer">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
