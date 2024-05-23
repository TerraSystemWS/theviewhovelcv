import React from 'react'
import PostItem from './postItem'
import postsData from '@/data/postsData' // Importing the post data
import { Post } from '@/data/postsData'

interface PostAreaProps {
  posts: Post[]
}

const PostArea: React.FC<PostAreaProps> = ({ posts }) => {
  return (
    <div className="blog__area section-padding">
      <div className="container">
        <div className="row mb-60">
          <div className="col-xl-12">
            <div className="blog__area-title">
              <span className="subtitle__one">Our Blog</span>
              <h2>Read Our Blog and News</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {postsData.map((post, index) => (
            <PostItem key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostArea
