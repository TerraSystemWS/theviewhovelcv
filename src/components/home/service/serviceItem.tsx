import React from 'react'

interface ServiceItemProps {
  iconSrc: string
  title: string
  description: string
  colSize: string
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  iconSrc,
  title,
  description,
  colSize,
}) => {
  return (
    <div className={colSize}>
      <div className="services__area-item">
        <div className="services__area-item-icon">
          <img src={iconSrc} alt="" />
        </div>
        <div className="services__area-item-content">
          <h5>
            <a href="#">{title}</a>
          </h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem
