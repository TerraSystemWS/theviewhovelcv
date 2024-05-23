import React from 'react'
import Left from './featureAreaBox/left'
import Right from './featureAreaBox/right'
import featuresData from '@/data/features'

interface Feature {
  title: string
  subtitle: string
  description: string
  imageUrl: string
}

interface FeatureAreaProps {
  features?: Feature[] // ? - porque ja nao é mais opcional (features = featuresData)
}

const FeatureArea: React.FC<FeatureAreaProps> = ({
  features = featuresData,
}) => {
  return (
    <div className="feature__area">
      <div className="container">
        {/* renderiza cada fecture separadamente */}
        {features.map((feature, index) =>
          index % 2 === 0 ? (
            <Left
              key={index}
              subtitle={feature.subtitle}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              altText={`Feature ${index + 1}`} // Assuming alt text for images
            />
          ) : (
            <Right
              key={index}
              subtitle={feature.subtitle}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              altText={`Feature ${index + 1}`} // Assuming alt text for images
            />
          )
        )}
      </div>
    </div>
  )
}

export default FeatureArea
