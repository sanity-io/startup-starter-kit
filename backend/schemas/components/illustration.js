export default {
  name: "illustration",
  title: "Illustration",
  type: "image",
  options: {
    hotspot: true
  },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alt"
    },
    {
      name: "caption",
      type: "simpleBlockContent",
      title: "Caption"
    }
  ],
  preview: {
    select: {
      title: "image.alt",
      media: "image"
    }
  }
}
