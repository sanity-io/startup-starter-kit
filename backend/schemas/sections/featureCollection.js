import Features from 'react-icons/lib/fa/tasks'
export default {
  name: 'featureCollection',
  type: 'object',
  title: 'FeatureCollection',
  icon: Features,
  fields: [{
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'features',
      type: 'array',
      title: 'Feature',
      of: [{
        type: 'reference',
        title: 'feature',
        to: {
          type: 'feature'
        }
      }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type'
    }
  }
}
