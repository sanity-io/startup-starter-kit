import * as sections from '../sections'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
      {
          name: 'title',
          type: 'string',
          title: 'Title'
      },
      {
        name: 'sections',
        type: 'array',
        title: 'sections',
        of: [
          ...Object.values(sections).map(({name, title}) =>  ({type: name, title: `Custom ${title}`})),
          { type: 'sharedSection' }
        ]
      }
  ]
}