export interface Feature {
  title: string
  subtitle: string
  description: string
  imageUrl: string
  link: string
}

const features: Feature[] = [
  {
    title: 'Restaurant',
    subtitle: 'Our Food',
    description:
      "Experience culinary excellence at our Restaurant. Indulge in a fusion of flavors and textures meticulously crafted to tantalize your taste buds. From tantalizing appetizers to sumptuous main courses and decadent desserts, our menu offers a delightful array of options to satisfy every palate. Whether you're seeking a romantic dinner for two or a memorable dining experience with friends and family, our restaurant promises to elevate your gastronomic journey. Join us and embark on a culinary adventure that celebrates the essence of fine dining.",
    imageUrl: '/assets/img/features/feature-1.jpg',
    link: '#',
  },
  {
    title: 'The Gamming Room',
    subtitle: 'Experience the Ultimate Gaming Adventure',
    description:
      "Welcome to The Gaming Room, where entertainment meets excitement. Immerse yourself in a world of exhilarating gameplay and interactive experiences. Whether you're a casual gamer or a seasoned pro, our gaming room offers a diverse selection of games to suit every preference. From classic favorites to the latest releases, there's something for everyone to enjoy. Join fellow gamers in epic battles, embark on thrilling adventures, and unleash your competitive spirit in a vibrant and dynamic atmosphere. Get ready to level up your gaming experience and create unforgettable memories at The Gaming Room.",
    imageUrl: '/assets/img/features/feature-2.jpg',
    link: '#',
  },
  {
    title: 'Cine Room',
    subtitle: 'Immersive Cinema Experience',
    description:
      'Experience the magic of cinema in our Cine Room. Sit back, relax, and enjoy the latest blockbusters or timeless classics with top-notch audiovisual setup and comfortable seating.',
    imageUrl: '/assets/img/features/feature-3.jpg',
    link: '#',
  },
  {
    title: 'Swimming Pool',
    subtitle: 'Refreshing Experiences',
    description:
      'Dive into relaxation and rejuvenation at our Swimming Pool. Enjoy a refreshing escape from the everyday hustle and bustle, surrounded by serene ambiance and invigorating waters.',
    imageUrl: '/assets/img/features/feature-4.jpg',
    link: '#',
  },
  {
    title: 'Dance the Night Away',
    subtitle: 'Electrifying Vibes',
    description:
      "Step into a world of rhythm and excitement at our Discotheque. Lose yourself in the pulsating beats, vibrant lights, and infectious energy that fills the air. Whether you're a seasoned dancer or just looking to let loose, our disco offers an unforgettable nightlife experience. Join us as we create memories that will last a lifetime on the dance floor.",
    imageUrl: '/assets/img/features/feature-5.jpg',
    link: '#',
  },
]

export default features
