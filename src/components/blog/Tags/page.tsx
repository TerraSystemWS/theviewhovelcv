import React from 'react'
import Link from 'next/link'

interface Tagsprops {
  tags: string[]
}
const Tags: React.FC<Tagsprops> = ({ tags }) => {
  return (
    <>
      <div className="all__sidebar-item">
        <h5>Tag&#39;s</h5>
        <div className="all__sidebar-item-tag">
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>
                <Link href={`#${tag}`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Tags
