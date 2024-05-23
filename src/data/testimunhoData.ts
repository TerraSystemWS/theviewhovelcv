interface Testimonial {
  name: string
  role: string
  image: string
  quote: string
}

const testimonialData: Testimonial[] = [
  {
    name: 'Ailton Duarte',
    role: 'Manager at TerraSystem',
    image: 'assets/img/avatar/testimonial-3.jpg',
    quote:
      'It was truly splendid! The gaming room and the pool enchanted me, and that "View" was truly magnificent.',
  },
  {
    name: 'David Beckham',
    role: 'UX Designer',
    image: 'assets/img/avatar/testimonial-1.jpg',
    quote:
      'Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta, porta lectus non, malesuada neque. Integer in tempus leo. Quisque vitae leo ac ex suscipit iaculis eu in nisl. Donec vestibulum volutpat lectus, vel aliquet massa porttitor in. Integer eleifend',
  },
  {
    name: 'David Fincher',
    role: 'UX Designer',
    image: 'assets/img/avatar/testimonial-2.jpg',
    quote:
      'Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta, porta lectus non, malesuada neque. Integer in tempus leo. Quisque vitae leo ac ex suscipit iaculis eu in nisl. Donec vestibulum volutpat lectus, vel aliquet massa porttitor in. Integer eleifend',
  },
  // Add more testimonials as needed
]

export default testimonialData
