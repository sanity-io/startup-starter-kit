export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'This title populates meta-tags on the webpage'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      title: 'Open graph',
      name: 'openGraph',
      type: 'openGraph'
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    }
  }
}