export interface DeluxeItemData {
  id: number
  slug: string
  imageUrl: string
  price: number
  roomType: string
  description: string
  link: string
  columnClasses: string
  With: number
  height: number
  beds: number
  guests: number
  rating: number
}

const deluxeData: DeluxeItemData[] = [
  {
    id: 1,
    slug: 'single-room',
    imageUrl: '/assets/img/luxury/luxury-1.jpg',
    price: 8190,
    roomType: 'Single Room',
    description: 'string',
    link: '#',
    columnClasses: 'col-xl-3 col-lg-4 mb-30 single',
    With: 600,
    height: 700,
    beds: 1,
    guests: 2,
    rating: 0,
  },
  {
    id: 2,
    slug: 'suite-room',
    imageUrl: '/assets/img/luxury/luxury-2.jpg',
    price: 13490,
    roomType: 'Suite Room',
    description: 'string',
    link: '#',
    columnClasses: 'col-xl-6 col-lg-8 mb-30 suite',
    With: 1260,
    height: 700,
    beds: 1,
    guests: 2,
    rating: 0,
  },
  {
    id: 3,
    slug: 'double-room',
    imageUrl: '/assets/img/luxury/luxury-3.jpg',
    price: 10390,
    roomType: 'Double Room',
    description: 'string',
    link: '#',
    columnClasses: 'col-xl-3 col-lg-4 mb-30 double',
    With: 600,
    height: 700,
    beds: 1,
    guests: 2,
    rating: 0,
  },
  {
    id: 4,
    slug: 'single-room2',
    imageUrl: '/assets/img/luxury/luxury-4.jpg',
    price: 8190,
    roomType: 'Single Room',
    description: 'string',
    link: '#',
    columnClasses: 'col-xl-6 col-lg-8 mb-30 single',
    With: 1260,
    height: 700,
    beds: 1,
    guests: 2,
    rating: 0,
  },
  {
    id: 5,
    slug: 'twin-room',
    imageUrl: '/assets/img/luxury/luxury-5.jpg',
    price: 10390,
    roomType: 'Twin Room',
    description: 'string',
    link: '#',
    columnClasses: 'col-xl-6 suite',
    With: 1260,
    height: 700,
    beds: 2,
    guests: 2,
    rating: 0,
  },
]

export default deluxeData
