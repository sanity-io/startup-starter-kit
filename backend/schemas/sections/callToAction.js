export default {
  type: 'object',
  title: 'Call to Action',
  name: 'callToAction',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'simpleBlockContent'
    },
    {
      type: 'array',
      title: 'Buttons',
      name: 'buttons',
      of: [{ type: 'cta' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type'
    }
  }
}
