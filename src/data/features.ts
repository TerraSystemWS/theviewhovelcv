export interface Feature {
  title: string
  subtitle: string
  description: string
  imageUrl: string
}

const features: Feature[] = [
  {
    title: 'Restaurant',
    subtitle: 'Our Food',
    description:
      "Experience culinary excellence at our Restaurant. Indulge in a fusion of flavors and textures meticulously crafted to tantalize your taste buds. From tantalizing appetizers to sumptuous main courses and decadent desserts, our menu offers a delightful array of options to satisfy every palate. Whether you're seeking a romantic dinner for two or a memorable dining experience with friends and family, our restaurant promises to elevate your gastronomic journey. Join us and embark on a culinary adventure that celebrates the essence of fine dining.",
    imageUrl: 'assets/img/features/feature-1.jpg',
  },
  {
    title: 'The Gamming Room',
    subtitle: 'Experience the Ultimate Gaming Adventure',
    description:
      "Welcome to The Gaming Room, where entertainment meets excitement. Immerse yourself in a world of exhilarating gameplay and interactive experiences. Whether you're a casual gamer or a seasoned pro, our gaming room offers a diverse selection of games to suit every preference. From classic favorites to the latest releases, there's something for everyone to enjoy. Join fellow gamers in epic battles, embark on thrilling adventures, and unleash your competitive spirit in a vibrant and dynamic atmosphere. Get ready to level up your gaming experience and create unforgettable memories at The Gaming Room.",
    imageUrl: 'assets/img/features/feature-2.jpg',
  },
  {
    title: 'Cine Room',
    subtitle: 'Immersive Cinema Experience',
    description:
      'Experience the magic of cinema in our Cine Room. Sit back, relax, and enjoy the latest blockbusters or timeless classics with top-notch audiovisual setup and comfortable seating.',
    imageUrl: 'assets/img/features/feature-3.jpg',
  },
  {
    title: 'Swimming Pool',
    subtitle: 'Refreshing Experiences',
    description:
      'Dive into relaxation and rejuvenation at our Swimming Pool. Enjoy a refreshing escape from the everyday hustle and bustle, surrounded by serene ambiance and invigorating waters.',
    imageUrl: 'assets/img/features/feature-4.jpg',
  },
]

export default features
