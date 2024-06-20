import React from 'react'

interface Tagsprops {
  tag: string
}
const Tags: React.FC = () => {
  return (
    <>
      <div className="all__sidebar-item">
        <h5>Tag'g</h5>
        <div className="all__sidebar-item-tag">
          <ul>
            <li>
              <a href="#">Hotel</a>
            </li>
            <li>
              <a href="#">Booking Now</a>
            </li>
            <li>
              <a href="#">Luxury</a>
            </li>
            <li>
              <a href="#">Single room</a>
            </li>
            <li>
              <a href="#">Small suite</a>
            </li>
            <li>
              <a href="#">Terra</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Tags
