export default {
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: "Optionable title"
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {type: 'block'},
        {type: 'image'}
      ]
    }
  ]
}
