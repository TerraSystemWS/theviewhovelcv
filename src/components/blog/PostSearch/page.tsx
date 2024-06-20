import React from 'react'

interface postSearchProps {
  placeholder: string
}

const PostSearch: React.FC<postSearchProps> = ({ placeholder }) => {
  return (
    <div className="all__sidebar-item-search mb-40">
      <form action="#">
        <input type="text" placeholder={placeholder} />
        <button type="submit">
          <i className="fal fa-search"></i>
        </button>
      </form>
    </div>
  )
}

export default PostSearch
