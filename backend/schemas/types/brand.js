export default {
  name: 'brand',
  type: 'object',
  title: 'brand',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
    },
    {
      name: 'colorScheme',
      type: 'colorScheme'
    }
  ]
}
