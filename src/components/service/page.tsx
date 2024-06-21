import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ServiceProps {
  slug: string
  image: string
  name: string
  price: number
}

const BService: React.FC<ServiceProps> = ({ slug, image, name, price }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
      <div className="services__team-item">
        <div className="services__team-item-image">
          <Image src={image} alt={name} width={820} height={900} />

          <Link href={`/services/${slug}`}>
            <div className="services__team-item-image-content">
              <Link href={`/services/${slug}`}>
                <h5>{name}</h5>
              </Link>
              <span>{price}</span>
              {/* <div className="services__team-item-image-content-social">
              <ul>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link}>
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BService
