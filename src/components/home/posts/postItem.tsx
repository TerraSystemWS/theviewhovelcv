import React from 'react'

interface PostItemProps {
  date: string
  title: string
  image: string
  link: string
}

const PostItem: React.FC<PostItemProps> = ({ date, title, image, link }) => {
  return (
    <div className="col-xl-4 col-lg-6 xl-mb-30">
      <div className="blog__area-item">
        <div className="blog__area-item-image">
          <a href={link}>
            <img src={image} alt="" />
          </a>
        </div>
        <div className="blog__area-item-content">
          <div className="blog__area-item-content-box">
            <div className="blog__area-item-content-box-date">
              <h3>{date}</h3>
              <span>{date}</span>
            </div>
            <div className="blog__area-item-content-box-title">
              <h5>
                <a href={link}>{title}</a>
              </h5>
            </div>
          </div>
          <div className="blog__area-item-content-btn">
            <a className="simple-btn-2" href={link}>
              Read More
              <i className="fal fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem
