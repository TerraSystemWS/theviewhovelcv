'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Tags from '@/components/blog/Tags/page'
import RecentPosts from '@/components/blog/RecentPosts/page'
import Category from '@/components/blog/Category/page'
import PostSearch from '@/components/blog/PostSearch/page'
import BPostItem from '@/components/blog/BPostItem/page'
import postsData from '@/data/postsData'

const Posts: React.FC = () => {
  const tags = ['Booking Now', 'Luxury', 'Single room', 'Small suite']
  const postsPerPage = 3 // Quantidade de posts por página
  const [currentPage, setCurrentPage] = useState(1)

  // Calcular índices de início e fim dos posts da página atual
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = postsData.slice(indexOfFirstPost, indexOfLastPost)

  // Função para mudar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <>
      {/* Seção de Banner */}
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

      {/* Seção de Posts */}
      <div className="blog__standard section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-8 col-lg-8 lg-mb-30">
              <div className="blog__standard-left">
                {/* Lista de Posts */}
                {currentPosts.length > 0 ? (
                  currentPosts.map((post, index) => (
                    <BPostItem key={index} {...post} />
                  ))
                ) : (
                  <p>Nenhum post encontrado.</p>
                )}

                {/* Paginação */}
                <div className="theme__pagination mt-50">
                  <ul>
                    {/* Links de páginas */}
                    {postsData.length > 0 &&
                      Math.ceil(postsData.length / postsPerPage) > 1 &&
                      Array.from(
                        { length: Math.ceil(postsData.length / postsPerPage) },
                        (_, i) => i + 1
                      ).map((pageNumber) => (
                        <li key={pageNumber}>
                          <Link
                            href={`/posts?page=${pageNumber}`}
                            passHref
                            className={`${
                              pageNumber === currentPage ? 'active' : ''
                            }`}
                            onClick={() => paginate(pageNumber)}
                          >
                            {pageNumber}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
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
    </>
  )
}

export default Posts
