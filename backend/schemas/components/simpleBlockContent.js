export default {
  name: 'simpleBlockContent',
  type: 'array',
  title: 'simpleBlockContent',
  of: [{
    type: 'block',
    marks: {
      // Only allow these decorators
      // Support annotating text with a reference to an author
      annotations: [{
        name: 'internalLink',
        title: 'Internal link',
        type: 'reference',
        to: [
          { type: 'route' }
        ]
      }]
    }
  }]
}