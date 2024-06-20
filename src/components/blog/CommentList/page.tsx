import React from 'react'
import Image from 'next/image'

interface CommentListProps {
  author: string
  date: string
  comment: string
}

const CommentList: React.FC<CommentListProps> = ({ author, date, comment }) => {
  return (
    <>
      <div className="blog__details-left-comment-item">
        <div className="blog__details-left-comment-item-comment">
          <div className="blog__details-left-comment-item-comment-image">
            <Image
              src="/assets/img/avatar/comment-1.jpg"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="blog__details-left-comment-item-comment-content">
            <h5>
              {author}
              {/* <a href="#">
                <i className="far fa-reply-all"></i>Reply
              </a> */}
            </h5>
            <span>{date}</span>
            <p>{comment}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default CommentList
