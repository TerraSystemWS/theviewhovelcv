// TestimonialItem.tsx

import React from 'react'

interface TestimonialItemProps {
  name: string
  role: string
  image: string
  quote: string
}

const TestimunhoItem: React.FC<TestimonialItemProps> = ({
  name,
  role,
  image,
  quote,
}) => {
  return (
    <div className="swiper-slide">
      <div className="testimonial__area-item">
        <div className="testimonial__area-item-image">
          <img className="img__full" src={image} alt="" />
        </div>
        <div className="testimonial__area-item-content">
          <h4>{name}</h4>
          <span>{role}</span>
          <p>{quote}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimunhoItem
