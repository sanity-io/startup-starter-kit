export default {
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'tagLine',
      type: 'simpleBlockContent',
      title: 'Tagline'
    },
    {
      name: 'ctas',
      type: 'array',
      title: 'Call To Actions',
      of: [
        {
          name: 'cta',
          type: 'cta',
          title: 'Call To Action'
        },
      ]
    },
  ]
}