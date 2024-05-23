import React from 'react'
import ServiceItem from './serviceItem'
import { Service } from '@/data/serviceData' // Importing the Service interface

interface ServicesAreaProps {
  services: Service[]
}

const ServicesArea: React.FC<ServicesAreaProps> = ({ services }) => {
  return (
    <div className="services__area section-padding">
      <div className="container">
        <div className="row">
          {services.map((service: Service, index: number) => (
            <ServiceItem
              key={index}
              iconSrc={service.iconSrc}
              title={service.title}
              description={service.description}
              colSize={service.colSize}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesArea
