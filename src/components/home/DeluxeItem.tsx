'use client'

import Image from 'next/image'
import { DeluxeItemData } from '@/data/deluxeData'

// interface DeluxeAreaItemProps {
//   slug: string
//   imageUrl: string
//   price: number
//   roomType: string
//   link: string
//   columnClasses: string
//   With: number
//   height: number
// }

const DeluxeItem: React.FC<DeluxeItemData> = ({
  slug,
  imageUrl,
  price,
  roomType,
  columnClasses,
  With,
  height,
}) => {
  return (
    <div className={columnClasses}>
      <div className="deluxe__area-item">
        <div className="deluxe__area-item-image">
          <Image src={imageUrl} alt="" width={With} height={height} />
        </div>
        <div className="deluxe__area-item-content">
          {/* <h6>
            <a href="#">
              <span>{price}</span> / Night
            </a>
          </h6> */}
          <h4>
            <a href={`/room-list/${slug}`}>{roomType}</a>
          </h4>
          <a className="simple-btn" href="/contact">
            <i className="far fa-chevron-right"></i>
            Booking Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default DeluxeItem
