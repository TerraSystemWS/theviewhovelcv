import React from 'react'

interface FeatureProps {
  subtitle: string
  title: string
  description: string
  imageUrl: string
  altText: string
}

const Left: React.FC<FeatureProps> = ({
  subtitle,
  title,
  description,
  imageUrl,
  altText,
}) => {
  return (
    <div className="row align-items-center bg-left mb-60">
      <div className="col-xl-6 col-lg-6">
        <div className="feature__area-image">
          <img className="img__full" src={imageUrl} alt={altText} />
        </div>
      </div>
      <div className="col-xl-6 col-lg-6">
        <div className="feature__area-left">
          <div className="feature__area-left-title">
            <span className="subtitle__one">{subtitle}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <a className="theme-border-btn" href="services-details.html">
              Read More<i className="fal fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Left
