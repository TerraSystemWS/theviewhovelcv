import Image from 'next/image'
import accommodationsData from '@/data/accommodationsData'

interface AccommodationsProps {
  title: string
  subtitle: string
  description: string
  readMoreLink: string
  imageUrl1: string
  imageUrl2: string
}

const Accommodations: React.FC<AccommodationsProps> = ({
  title,
  subtitle,
  description,
  readMoreLink,
  imageUrl1,
  imageUrl2,
}) => {
  return (
    <div className="accommodations__area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 lg-mb-30">
            <div className="accommodations__area-title">
              <span className="subtitle__one">{subtitle}</span>
              <h2>{title}</h2>
              <p>{description}</p>
              <a className="theme-btn" href={readMoreLink}>
                Read More
                <i className="fal fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="accommodations__area-right">
              <div className="accommodations__area-right-image">
                <Image
                  src={imageUrl1}
                  alt="Hotel Image 1"
                  width={520}
                  height={350}
                />
                <div className="accommodations__area-right-image-two">
                  <Image
                    src={imageUrl2}
                    alt="Hotel Image 2"
                    width={360}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accommodations
