import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BService from '@/components/service/page'

const Service: React.FC = () => {
  const teamMembers = [
    {
      image: '/assets/img/team/team-5.jpg',
      name: 'JetSki',
      socialLinks: ['#', '#', '#', '#'], // Exemplo de links (substitua com URLs reais)
      columnClasses: 'col-xl-4 col-lg-4 col-md-6 mb-30',
    },
    {
      image: '/assets/img/team/team-6.jpg',
      name: 'Carro',
      socialLinks: ['#', '#', '#', '#'],
      columnClasses: 'col-xl-4 col-lg-4 col-md-6 md-mb-30',
    },
    {
      image: '/assets/img/team/team-7.jpg',
      name: 'Dive',
      socialLinks: ['#', '#', '#', '#'],
      columnClasses: 'col-xl-4 col-lg-4 col-md-6 lg-mb-30',
    },
  ]
  return (
    <>
      {/* <!-- Page Banner Start --> */}
      <div
        className="page__banner"
        data-background="/assets/img/banner/page-banner-9.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Services</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <span>-</span>Services
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Banner End --> */}
      {/* <!-- Services Team Start --> */}
      <div className="services__team section-padding">
        <div className="container">
          <div className="row">
            {teamMembers.map((member, index) => (
              <BService
                key={index}
                image={member.image}
                name={member.name}
                socialLinks={member.socialLinks}
                columnClasses={member.columnClasses}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Services Team End --> */}
    </>
  )
}

export default Service
