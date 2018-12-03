export default {
  name: 'feature',
  type: 'document',
  title: 'Feature',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'simpleBlockContent',
      title: 'Description'
    },
    {
      name: 'illustration',
      type: 'illustration',
      title: 'Illustration'
    }
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      illustration: 'illustration'
    },
    prepare({title, description, illustration}) {
      const block = (description || []).find(block => block._type === 'block')
      console.log(title, description, illustration)
      return {
        title: title,
        subtitle: block
        ? block.children
          .filter(child => child._type === 'span')
          .map(span => span.text)
          .join('')
        : 'No title',
        media: illustration
      }
    }
  }
}
