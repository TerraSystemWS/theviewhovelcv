import React from 'react'
import Link from 'next/link'
import Tags from '@/components/blog/Tags/page'
import RecentPosts from '@/components/blog/RecentPosts/page'
import Category from '@/components/blog/Category/page'
import PostSearch from '@/components/blog/PostSearch/page'
import BPostItem from '@/components/blog/BPostItem/page'
import postsData from '@/data/postsData'

const Posts: React.FC = () => {
  const tags = ['Booking Now', 'Luxury', 'Single room', 'Small suite']

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
                <h1>Blog and News</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <span>-</span>Blog and News
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Banner End --> */}
      {/* <!-- Blog Standard Start --> */}
      <div className="blog__standard section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-8 col-lg-8 lg-mb-30">
              <div className="blog__standard-left">
                {/* {postsData.slice(0, 3).map((post, index) => (
                  <BPostItem key={index} {...post} />
                ))} */}
                {postsData.length > 0 ? (
                  postsData
                    .slice(0, 3)
                    .map((post, index) => <BPostItem key={index} {...post} />)
                ) : (
                  <p>Nenhum post encontrado.</p>
                )}
              </div>
              <div className="theme__pagination mt-50">
                <ul>
                  <li>
                    <a className="active" href="#">
                      01
                    </a>
                  </li>
                  <li>
                    <a href="#">02</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-ellipsis-h"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">05</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4">
              <PostSearch placeholder="Search....." />
              <div className="all__sidebar">
                <Category />
                <RecentPosts posts={postsData} />

                <Tags tags={tags} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog Standard End --> */}
    </>
  )
}

export default Posts
