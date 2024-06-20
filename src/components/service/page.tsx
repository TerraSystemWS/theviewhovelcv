import React from 'react'

interface ServiceProps {
  image: string
  name: string
  socialLinks: string[] // URLs dos links sociais
  columnClasses: string // Classes das colunas (ex: 'col-xl-4 col-lg-4 col-md-6 mb-30')
}

const BService: React.FC<ServiceProps> = ({
  image,
  name,
  socialLinks,
  columnClasses,
}) => {
  return (
    <div className={columnClasses}>
      <div className="services__team-item">
        <div className="services__team-item-image">
          <img src={image} alt={name} />
          <div className="services__team-item-image-content">
            <h5>{name}</h5>
            <span>- - - - -</span>
            <div className="services__team-item-image-content-social">
              <ul>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BService
