import React from 'react'
import Image from 'next/image'

interface TestimonialItemProps {
  name: string
  role: string
  image: string
  quote: string
  With: number
  height: number
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  name,
  role,
  image,
  quote,
  With,
  height,
}) => {
  return (
    <div className="swiper-slide">
      <div className="testimonial__area-item">
        <div className="testimonial__area-item-image">
          <Image
            className="img__full"
            src={image}
            alt="img__full"
            width={With} // Set the width of the image
            height={height} // Set the height of the image
          />
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

export default TestimonialItem
