'use client'
import { useState } from 'react'
import DeluxeItem from './DeluxeItem'
import { DeluxeItemData } from '@/data/deluxeData'

interface DeluxeAreaProps {
  deluxeData: DeluxeItemData[]
}

const DeluxeArea: React.FC<DeluxeAreaProps> = ({ deluxeData }) => {
  const [filter, setFilter] = useState<string>('*')

  const handleFilterChange = (newFilter: string) => {
    console.log(newFilter)
    setFilter(newFilter)
  }

  // Filter the Deluxe items based on the selected filter
  const filteredDeluxeItems: DeluxeItemData[] =
    filter === '*'
      ? deluxeData // If filter is "*", show all items
      : deluxeData.filter((item) => item.columnClasses.includes(filter))

  return (
    <div className="deluxe__area section-padding">
      <div className="container">
        <div className="row align-items-end mb-60">
          <div className="col-xl-5">
            <div className="deluxe__area-title">
              <span className="subtitle__one">Deluxe and Luxury</span>
              <h2>Our Luxury Rooms</h2>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="deluxe__area-btn">
              <ul>
                <li
                  className={filter === '*' ? 'active' : ''}
                  onClick={() => handleFilterChange('*')}
                  data-filter="*"
                >
                  All Rooms
                </li>
                <li
                  className={filter === 'suite' ? 'active' : ''}
                  onClick={() => handleFilterChange('suite')}
                  data-filter="suite"
                >
                  Suite
                </li>
                <li
                  className={filter === 'single' ? 'active' : ''}
                  onClick={() => handleFilterChange('single')}
                  data-filter="single"
                >
                  Single
                </li>
                <li
                  className={filter === 'double' ? 'active' : ''}
                  onClick={() => handleFilterChange('double')}
                  data-filter="double"
                >
                  Double
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row deluxe__area-active">
          {/* Render the filtered Deluxe items */}
          {filteredDeluxeItems.map((item: DeluxeItemData, index: number) => (
            <DeluxeItem
              key={index}
              imageUrl={item.imageUrl}
              price={item.price}
              roomType={item.roomType}
              link={item.link}
              columnClasses={item.columnClasses}
              With={item.With}
              height={item.height}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DeluxeArea
