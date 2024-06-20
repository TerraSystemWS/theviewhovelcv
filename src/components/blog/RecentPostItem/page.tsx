import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/data/postsData'

const RecentPostItem: React.FC<Post> = ({ date, title, slug }) => {
  return (
    <>
      <div className="all__sidebar-item-post">
        <div className="all__sidebar-item-post-item">
          <div className="all__sidebar-item-post-item-image">
            <Link href="blog-details.html">
              <Image
                src="/assets/img/blog/post-1.jpg"
                alt=""
                width={80}
                height={80}
              />
            </Link>
          </div>
          <div className="all__sidebar-item-post-item-content">
            <span>
              <i className="fal fa-calendar-alt"></i>
              {date}
            </span>
            <h6>
              <Link href={`/posts/${slug}`}>{title}</Link>
            </h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentPostItem
