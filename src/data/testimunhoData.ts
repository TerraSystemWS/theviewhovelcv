interface Testimonial {
  name: string
  role: string
  image: string
  quote: string
  With: number
  height: number
}

const testimonialData: Testimonial[] = [
  {
    name: 'Ailton Duarte',
    role: 'Manager at TerraSystem',
    image: '/assets/img/avatar/testimonial-1.jpg',
    quote:
      'It was truly splendid! The gaming room and the pool enchanted me, and that "View" was truly magnificent.',
    With: 220,
    height: 300,
  },
  // Add more testimonials as needed
]

export default testimonialData
