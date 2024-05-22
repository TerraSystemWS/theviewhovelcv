// serviceData.ts

export interface Service {
  iconSrc: string
  title: string
  description: string
  colSize: string
}

const serviceData: Service[] = [
  {
    iconSrc: 'assets/img/icon/cleaning.png',
    title: 'Room Cleaning',
    description: 'When it comes to room cleaning, precision is key.',
    colSize: 'col-xl-4 col-lg-4 col-md-6 col-sm-6 lg-mb-30',
  },
  {
    iconSrc: 'assets/img/icon/wifi.png',
    title: 'Room Wifi',
    description:
      'When it comes to connectivity, room Wi-Fi is an essential part of the guest experience.',
    colSize: 'col-xl-4 col-lg-4 col-md-6 col-sm-6 sm-mb-30',
  },
  {
    iconSrc: 'assets/img/icon/location.png',
    title: 'Pickup & Drop',
    description:
      'Our pickup and drop-off service is designed to add convenience to your stay.',
    colSize: 'col-xl-4 col-lg-4 col-md-6 col-sm-6',
  },
]

export default serviceData
