'use client'

import Image from 'next/image'

interface DeluxeAreaItemProps {
  imageUrl: string
  price: string
  roomType: string
  link: string
  columnClasses: string
}

const DeluxeItem: React.FC<DeluxeAreaItemProps> = ({
  imageUrl,
  price,
  roomType,
  link,
  columnClasses,
}) => {
  return (
    <div className={columnClasses}>
      <div className="deluxe__area-item">
        <div className="deluxe__area-item-image">
          <Image src={imageUrl} alt="" width={600} height={400} />
        </div>
        <div className="deluxe__area-item-content">
          <h6>
            <a href="#">
              <span>{price}</span> / Night
            </a>
          </h6>
          <h4>
            <a href={link}>{roomType}</a>
          </h4>
          <a className="simple-btn" href="contact.html">
            <i className="far fa-chevron-right"></i>
            Booking Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default DeluxeItem
