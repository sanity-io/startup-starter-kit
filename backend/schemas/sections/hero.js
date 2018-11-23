export default {
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "tagLine",
      type: "simpleBlockContent",
      title: "Tagline"
    },
    {
      name: "ctas",
      type: "array",
      title: "Call To Actions",
      of: [
        {
          name: "cta",
          type: "cta",
          title: "Call To Action"
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type'
    }
  }
}
