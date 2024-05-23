import React from 'react'
import TestimunhoItem from './testimunhoItem'

interface TestimunhoAreaProps {
  testimunhoData: {
    name: string
    role: string
    image: string
    quote: string
    With: number
    height: number
  }[]
}

const TestimunhoArea: React.FC<TestimunhoAreaProps> = ({ testimunhoData }) => {
  return (
    <div className="testimonial__area section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="testimonial__area-bg">
              <div className="swiper testimonial__slider">
                <div className="swiper-wrapper">
                  {testimunhoData.map((testimonial, index) => (
                    <TestimunhoItem
                      key={index}
                      name={testimonial.name}
                      role={testimonial.role}
                      image={testimonial.image}
                      quote={testimonial.quote}
                      With={testimonial.With}
                      height={testimonial.height}
                    />
                  ))}
                </div>
              </div>
              <div className="testimonial__area-item-dots">
                <div className="pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimunhoArea
