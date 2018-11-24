export default schema => ({
  ...schema,
  title: `Shared ${schema.name}`,
  name: `shared.${schema.name}`,
  type: 'document',
  preview: {
    select: {
      heading: 'heading',
      title: 'title',
      type: '_type'
    },
    prepare({ title, heading, type }) {
      return {
        title: title || heading || 'No title',
        subtitle: type
      }
    }
  }
})