import React from 'react'
import Image from 'next/image'

interface FeatureProps {
  subtitle: string
  title: string
  description: string
  imageUrl: string
  altText: string
  link: string
}

const Left: React.FC<FeatureProps> = ({
  subtitle,
  title,
  description,
  imageUrl,
  altText,
  link,
}) => {
  return (
    <div className="row align-items-center bg-left mb-60">
      <div className="col-xl-6 col-lg-6">
        <div className="feature__area-image">
          <Image
            className="img__full"
            src={imageUrl}
            alt={altText}
            width={1260}
            height={820}
          />
        </div>
      </div>
      <div className="col-xl-6 col-lg-6">
        <div className="feature__area-left">
          <div className="feature__area-left-title">
            <span className="subtitle__one">{subtitle}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <a className="theme-border-btn" href={link}>
              Read More<i className="fal fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Left
