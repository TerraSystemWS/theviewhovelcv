// 'use client'
import Banner from '@/components/home/Banner'
import Accommodations from '@/components/home/Accommodations'
import accommodationsData from '@/data/accommodationsData' // importacao de dados
import DeluxeArea from '@/components/home/DeluxeArea'
import deluxeData from '@/data/deluxeData' // importacao de dados
import VideoArea from '@/components/home/VideoArea'
import videoareaData from '@/data/videoareaData' //importacao de dados
import FeatureArea from '@/components/home/FeatureArea'
import features from '@/data/features' // import data
import ServicesArea from '@/components/home/service/servicesArea'
import { Service } from '@/data/serviceData' // Importing the Service interface
import serviceData from '@/data/serviceData' // Importing the service data
import bannerData from '@/data/bannerData' // Importing the banner data
import testimunhoData from '@/data/testimunhoData' // Importing the testimujho data
import TestimunhoArea from '@/components/home/testimunhosBox/testimunhosArea'
import postsData from '@/data/postsData'
import PostArea from '@/components/home/posts/postArea'

export default function Home() {
  // You can fetch or define the service data here
  const services: Service[] = serviceData

  return (
    <>
      {/* <!-- Banner Area Start -->	 */}
      <Banner
        title={bannerData.title}
        subtitle={bannerData.subtitle}
        imageLink={bannerData.imageLink}
        videoLink={bannerData.videoLink}
      />
      {/* <!-- Banner Area End --> */}
      {/* <!-- Accommodations Area Start --> */}
      <Accommodations {...accommodationsData} />
      {/* <!-- Accommodations Area End --> */}
      {/* <!-- Deluxe Area Start --> */}

      <DeluxeArea deluxeData={deluxeData} />

      {/* <!-- Deluxe Area End --> */}
      {/* <!-- Video Area Start --> */}
      <VideoArea {...videoareaData} />
      {/* <!-- Video Area End --> */}
      {/* <!-- Services Area Start --> */}
      <ServicesArea services={services} />
      {/* <!-- Services Area End --> */}
      {/* <!-- Feature Area Start  --> */}

      <FeatureArea features={features} />
      {/* <!-- Feature Area End --> */}
      {/* <!-- Testimonial Area Start -->	 */}
      <TestimunhoArea testimunhoData={testimunhoData} />

      {/* <!-- Testimonial Area End -->	 */}
      {/* <!-- Blog Area Start -->	 */}
      <PostArea posts={postsData} />
      {/* <!-- Blog Area End -->	 */}
    </>
  )
}
