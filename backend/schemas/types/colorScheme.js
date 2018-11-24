export default {
  name: 'colorScheme',
  type: 'object',
  title: 'colorScheme',
  fields: [
    {
      name: 'colors',
      type: 'array',
      title: 'colors',
      of: [
        {
          name: 'color',
          type: 'color',
          title: 'color'
        }
      ]
    },
  ]
}