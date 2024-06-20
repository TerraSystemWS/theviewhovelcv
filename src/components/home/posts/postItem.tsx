import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PostItemProps {
  date: string
  title: string
  image: string
  slug: string
}

const PostItem: React.FC<PostItemProps> = ({ date, title, image, slug }) => {
  return (
    <div className="col-xl-4 col-lg-6 xl-mb-30">
      <div className="blog__area-item">
        <div className="blog__area-item-image">
          <Link href={`/posts/${slug}`}>
            <Image src={image} alt="" width={820} height={460} />
          </Link>
        </div>
        <div className="blog__area-item-content">
          <div className="blog__area-item-content-box">
            <div className="blog__area-item-content-box-date">
              <h3>{date}</h3>
              <span>{date}</span>
            </div>
            <div className="blog__area-item-content-box-title">
              <h5>
                <Link href={`/posts/${slug}`}>{title}</Link>
              </h5>
            </div>
          </div>
          <div className="blog__area-item-content-btn">
            <Link className="simple-btn-2" href={`/posts/${slug}`}>
              Read More
              <i className="fal fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem
