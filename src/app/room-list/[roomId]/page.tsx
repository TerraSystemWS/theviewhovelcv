'use client'
import React from 'react'
import Link from 'next/link'
import deluxeData from '@/data/deluxeData'

export default function Page({ params }: any) {
  // return <p>Post: {router.query.slug}</p>
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
                <h1>Room Details</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/room-list">Room List</Link>
                    </li>
                    <li>
                      <span>-</span>
                      {params.roomId}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Banner End --> */}
    </>
  )
}
