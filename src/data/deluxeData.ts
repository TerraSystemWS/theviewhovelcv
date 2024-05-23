export interface DeluxeItemData {
  imageUrl: string
  price: string
  roomType: string
  link: string
  columnClasses: string
  With: number
  height: number
}

const deluxeData: DeluxeItemData[] = [
  {
    imageUrl: '/assets/img/luxury/luxury-1.jpg',
    price: '8.190$',
    roomType: 'Single Room',
    link: 'room-details.html',
    columnClasses: 'col-xl-3 col-lg-4 mb-30 single',
    With: 600,
    height: 700,
  },
  {
    imageUrl: '/assets/img/luxury/luxury-2.jpg',
    price: '13.490$',
    roomType: 'Suite Room',
    link: 'room-details.html',
    columnClasses: 'col-xl-6 col-lg-8 mb-30 suite',
    With: 1260,
    height: 700,
  },
  {
    imageUrl: '/assets/img/luxury/luxury-3.jpg',
    price: '10.390$',
    roomType: 'Double Room',
    link: 'room-details.html',
    columnClasses: 'col-xl-3 col-lg-4 mb-30 double',
    With: 600,
    height: 700,
  },
  {
    imageUrl: '/assets/img/luxury/luxury-4.jpg',
    price: '8.190$',
    roomType: 'Single Room',
    link: 'room-details.html',
    columnClasses: 'col-xl-6 col-lg-8 mb-30 single',
    With: 1260,
    height: 700,
  },
  {
    imageUrl: '/assets/img/luxury/luxury-5.jpg',
    price: '10.390$',
    roomType: 'Twin Room',
    link: 'room-details.html',
    columnClasses: 'col-xl-6 suite',
    With: 1260,
    height: 700,
  },
]

export default deluxeData
