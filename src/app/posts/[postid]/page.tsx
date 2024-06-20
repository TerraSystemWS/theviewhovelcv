import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import postsData from '@/data/postsData'
import CommentList from '@/components/blog/CommentList/page'
import CommentForm from '@/components/blog/CommentForm/page'
import PostSearch from '@/components/blog/PostSearch/page'
import Category from '@/components/blog/Category/page'
import RecentPosts from '@/components/blog/RecentPosts/page'
import Tags from '@/components/blog/Tags/page'

export default function Page({ params }: any) {
  const filteredpostsData = postsData.filter(
    (item) => item.slug === params.postid
  )
  console.log(filteredpostsData)
  // Example comment data
  const comments = [
    {
      author: 'John Doe',
      date: '2024-06-19',
      comment: 'This is a great post!',
    },
    {
      author: 'Jane Smith',
      date: '2024-06-18',
      comment: 'Nice article, thanks!',
    },
    {
      author: 'Michael Johnson',
      date: '2024-06-17',
      comment: 'I enjoyed reading this.',
    },
    // Add more comments as needed
  ]

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
                <h1>Blog Details</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <span>-</span>Blog Details
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Banner End --> */}
      {/* <!-- Blog Details Start --> */}
      <div className="blog__details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-8 col-lg-8 lg-mb-30">
              <div className="blog__details-left">
                <img src="/assets/img/blog/blog-10.jpg" alt="" />
                <div className="blog__details-left-meta">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fal fa-user"></i>By -{' '}
                        {filteredpostsData[0].author || ' '}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-calendar-alt"></i>
                        {filteredpostsData[0].date || ' '}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fal fa-comments"></i>0 Comment
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 className="mb-20">{filteredpostsData[0].title || ' '}</h3>
                <p className="mb-25">
                  {filteredpostsData[0].description || ' '}
                </p>
                {/* <p>
                  Nulla at eleifend lorem. Praesent et ex sed metus egestas
                  feugiat. Donec velit libero, feugiat ac dictum vel, dignissim
                  id ante. Praesent hendrerit posuere condimentum.
                </p>
                <div className="blog__details-left-box">
                  <div className="blog__details-left-box-icon">
                    <img src="assets/img/icon/quote.png" alt="" />
                  </div>
                  <p>
                    Aenean imperdiet finibus sodales. Sed non ex nisl. Maecenas
                    ut dictum neque, at euismod felis. Etiam rhoncus neque vitae
                    efficitur mollis. Vestibulum sed pulvinar magna. Suspendisse
                  </p>
                  <h5>David Beckham</h5>
                </div>
                <p>
                  Vestibulum eget tellus rhoncus, dictum massa a, mattis massa.
                  Cras in leo semper, ultricies ligula nec, ornare tellus.
                  Suspendisse quam risus, semper et ultricies a, commodo eu
                  tortor. Phasellus elementum tincidunt varius. Nam facilisis,
                  ante eget gravida vestibulum, ante nisi feugiat nulla, in
                  dapibus neque turpis et dolor. Vestibulum in urna urna.
                </p>
                <div className="row mt-40 mb-40">
                  <div className="col-sm-6 sm-mb-30">
                    <div className="blog__details-left-list">
                      <img
                        className="img__full"
                        src="/assets/img/blog/blog-11.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="blog__details-left-list blog__details-left-list-hover">
                      <img
                        className="img__full"
                        src="/assets/img/blog/blog-12.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-30">
                  Design pretium fermentum quam, sit amet cursus ante
                  sollicitudin vel. Morbi consequat risus consequat, porttitor
                  orci sit amet, iaculis nisl. Integer quis sapien neceli
                  ultrices euismod sit amet id lacus. Sed a imperdiet erat. Duis
                  eu est dignissim lacus dictum hendrerit quis vitae mi. Fusce
                  eu nulla ac nisi cursus tincidun. Interdum et malesuada fames
                  ac ante ipsum primis in faucibus. Integer tristique sem eget
                  leo faucibus porttitor.
                </p> */}
                <div className="blog__details-left-comment mb-45">
                  {/* <h4 className="mb-40">Comment (0)</h4>
                  {comments.slice(0, 5).map((comment, index) => (
                    <CommentList key={index} {...comment} />
                  ))} */}
                </div>
                <div className="blog__details-left-contact">
                  {/* <h4 className="mb-40">Add Comment</h4>
                  <CommentForm /> */}
                </div>
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
      {/* <!-- Blog Details End --> */}
    </>
  )
}
