export default schema => ({
  ...schema,
  title: `Shared ${schema.name}`,
  name: `shared.${schema.name}`,
  type: 'document',
  preview: {
    select: {
      heading: 'heading',
      title: 'title',
      name: 'name',
      type: '_type'
    },
    prepare({ title, heading, name, type }) {
      return {
        title: title || heading || name || 'No title',
        subtitle: type
      }
    }
  }
})
