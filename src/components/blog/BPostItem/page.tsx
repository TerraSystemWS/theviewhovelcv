import React from 'react'
import { Post } from '@/data/postsData'
import Image from 'next/image'
import Link from 'next/link'

const BPostItem: React.FC<Post> = ({
  date,
  title,
  image,
  slug,
  author,
  description,
}) => {
  return (
    <>
      {' '}
      <div className="blog__standard-left-item">
        <div className="blog__standard-left-item-image">
          <Link href={`posts/${slug}`}>
            <Image src={image} alt="" width={1920} height={900} />
          </Link>
        </div>
        <div className="blog__standard-left-item-content">
          <div className="blog__standard-left-item-content-meta">
            <ul>
              <li>
                <Link href="#">
                  <i className="fal fa-user"></i>By- {author}
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fal fa-calendar-alt"></i>07, {date}
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fal fa-comments"></i>0 Comment
                </Link>
              </li>
            </ul>
          </div>
          <h3>
            <Link href={`posts/${slug}`}>{title}</Link>
          </h3>
          <p className="mb-40">{description}</p>
          <Link className="theme-border-btn" href={`posts/${slug}`}>
            Read More<i className="fal fa-long-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BPostItem
