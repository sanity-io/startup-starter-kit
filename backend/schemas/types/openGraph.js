export default {
  title: 'Open Graph',
  name: 'openGraph',
  type: 'object',
  fieldsets: [
    {
      title: 'Image',
      name: 'image',
      options: {
        collapsible: true,
        collabpsed: true,
      }
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text'
    },
    {
      title: 'Image',
      description: 'Facebook recommends 1200x630 (will be auto resized)',
      name: 'image',
      type: 'image',
      fieldset: 'image'
    },
    {
      name: 'video',
      title: 'Video',
      type: 'object',
      options: {
        collapsible: true,
        preview: {
          select: {
            file: 'file.asset.originalFilename',
            size: 'file.asset.size',
            media: 'media',
            type: 'type'
          },
          prepare(selection) {
            return {
              title: selection.file,
              subtitle: `${Math.round(selection.size / 1024 / 1024)}Mb ${selection.type || ''} ${selection.media || ''}`
            }
          }
        }
      },
      fields: [
        {
          name: 'file',
          title: 'File',
          type: 'file',
        },
        {
          title: 'Type',
          name: 'type',
          type: 'string',
          options: {
            list: ['video/mp4', 'video/webm', 'video/ogg']
          }
        },
        {
          title: 'Width',
          name: 'width',
          type: 'string'
        },
        {
          title: 'Height',
          name: 'height',
          type: 'string'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      route: 'route.slug.current',
      link: 'link'
    },
    prepare({title, route, link}) {
      console.log(route, link)
      return {
        title,
        subtitle: route ? `Route: /${route}/` : (link ? `External link: ${link}` : 'Not set')
      }
    }
  }
}