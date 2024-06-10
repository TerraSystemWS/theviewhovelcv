import React from 'react'

interface RoomListItemProps {
  data: {
    roomType: string
    description: string
    imageUrl: string
    beds: number
    guests: number
    price: number
    rating: number
  }[]
}

const RoomListItem: React.FC<RoomListItemProps> = ({ data }) => {
  return (
    <div>
      {data.map((room, index) => (
        <div className="room__list-item" key={index}>
          <div className="room__list-item-left">
            <div className="room__list-item-image">
              <img src={room.imageUrl} alt="" width={300} height={250} />
            </div>
          </div>
          <div className="room__list-item-right">
            <div className="room__list-item-right-content">
              <h4>{room.roomType}</h4>
              <p>{room.description}</p>
              <ul>
                <li>
                  <i className="fal fa-bed-alt"></i>({room.beds}) bed's
                </li>
                <li>
                  <i className="fal fa-users"></i>({room.guests}) Guest's
                </li>
              </ul>
            </div>
            <div className="room__list-item-right-meta">
              <div className="room__list-item-right-meta-top">
                <span>{room.price}$00/Night</span>
                <p>
                  <i className="fas fa-star"></i>
                  <span>{room.rating}</span>2k
                </p>
              </div>
              <a className="simple-btn" href="/room-details/id">
                <i className="far fa-chevron-right"></i>Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RoomListItem
