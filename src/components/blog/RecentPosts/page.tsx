import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/data/postsData'
import RecentPostItem from '../RecentPostItem/page'

interface RecentPostsProps {
  posts: Post[]
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  return (
    <>
      <div className="all__sidebar-item">
        <h5>Recent Post</h5>
        {posts.map((post, index) => (
          <RecentPostItem key={index} {...post} />
        ))}
      </div>
    </>
  )
}

export default RecentPosts
