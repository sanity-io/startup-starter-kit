
export default {
  name: 'navItem',
  type: 'object',
  title: 'NavItem',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
    },
    {
      name: 'internal',
      type: 'reference',
      title: 'Internal',
      to: [
        { type: 'route' },
        { type: 'post' }
      ]
    },
    {
      name: 'external',
      type: 'url',
      title: 'External',
    }
  ],
  preview: {
    select: {
      text: 'text',
      internal: 'internal.slug.current',
      external: 'external'
    },
    prepare({text, internal, external}) {
      const link = (internal || external)
      ? internal ? internal : `${external} 🌍`
      : '⚠️ No link'
      return {
        title: text,
        subtitle: link
      }
    }
  }
}
