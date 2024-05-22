export interface DeluxeItemData {
  imageUrl: string
  price: string
  roomType: string
  link: string
  columnClasses: string
}

const deluxeData: DeluxeItemData[] = [
  {
    imageUrl: '/assets/img/luxury/luxury-1.jpg',
    price: '$134',
    roomType: 'Small Suite',
    link: 'room-details.html',
    columnClasses: 'col-xl-3 col-lg-4 mb-30 suite',
  },
  {
    imageUrl: '/assets/img/luxury/luxury-2.jpg',
    price: '$199',
    roomType: 'Deluxe Room',
    link: 'room-details.html',
    columnClasses: 'col-xl-6 col-lg-8 mb-30 suite',
  },
  {
    imageUrl: '/assets/img/luxury/luxury-3.jpg',
    price: '$319',
    roomType: 'Family Room',
    link: 'room-details.html',
    columnClasses: 'col-xl-3 col-lg-4 mb-30 double',
  },
  {
    imageUrl: '/assets/img/luxury/luxury-4.jpg',
    price: '$169',
    roomType: 'Single Room',
    link: 'room-details.html',
    columnClasses: 'col-xl-6 col-lg-8 mb-30 single',
  },
  {
    imageUrl: '/assets/img/luxury/luxury-5.jpg',
    price: '$249',
    roomType: 'Luxury Room',
    link: 'room-details.html',
    columnClasses: 'col-xl-6 suite',
  },
]

export default deluxeData
