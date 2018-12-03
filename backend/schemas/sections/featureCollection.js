export default {
  name: 'featureCollection',
  type: 'object',
  title: 'FeatureCollection',
  fields: [{
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'features',
      type: 'array',
      title: 'Feature',
      of: [{
        name: 'feature',
        type: 'reference',
        title: 'feature',
        to: {
          type: 'feature'
        }
      }, ]
    },

  ]
}
