export default {
  name: 'testimonialCollection',
  type: 'object',
  title: 'TestimonialCollection',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'testimonials',
      type: 'array',
      title: 'Testimonials',
      of: [
        { type: 'testimonial'}
      ]
    },

  ]
}
