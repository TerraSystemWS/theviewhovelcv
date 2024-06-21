interface ServiceProps {
  slug: string
  image: string
  name: string
  description: string
}

const serviceData: ServiceProps[] = [
  {
    slug: 'Quad',
    image: '/assets/img/aluguer/mota4.jpeg',
    name: 'Mota 4',
    description: 'string',
  },
  {
    slug: 'yellow-jetski',
    image: '/assets/img/aluguer/motamaramarelo.jpeg',
    name: 'Yellow JetSki',
    description: 'string',
  },
  {
    slug: 'green-jetski',
    image: '/assets/img/aluguer/motamarverde.jpeg',
    name: 'Green JetSki',
    description: 'string',
  },
]

export default serviceData
