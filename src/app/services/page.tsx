import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BService from '@/components/service/page'
import serviceData from '@/data/aluguerData'

const Service: React.FC = () => {
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
                      <Link href="/">Home</Link>
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
            {serviceData.map((member, index) => (
              <BService
                key={index}
                image={member.image}
                name={member.name}
                price={20}
                slug={member.slug}
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
