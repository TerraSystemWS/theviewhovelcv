import React, { useState } from 'react'

const SearchForm: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState<string>('')
  const [checkOutDate, setCheckOutDate] = useState<string>('')
  const [selectedRoom, setSelectedRoom] = useState<string>('1')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigateToRoomList()
  }

  const navigateToRoomList = () => {
    const queryParams = `?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&selectedRoom=${selectedRoom}`
    window.location.href = `/room-list${queryParams}`
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="check__area">
        <div className="check__area-item">
          <p>
            Check In
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </p>
        </div>
        <div className="check__area-item">
          <p>
            Check Out
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </p>
        </div>
        <div className="check__area-item">
          <div className="check__area-item-room">
            <p>Room</p>
            <select
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
            >
              <option value="1">Suite Master</option>
              <option value="2">Suite Térrea</option>
              <option value="3">Double Room</option>
              <option value="4">Single Room</option>
            </select>
          </div>
        </div>
        <div className="check__area-item button">
          <button className="theme-btn" type="submit">
            Check Now
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchForm
