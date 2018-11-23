export default {
  title: "Open Graph",
  name: "openGraph",
  type: "object",
  fieldsets: [
    {
      title: "Image",
      name: "image",
      options: {
        collapsible: true,
        collabpsed: true
      }
    }
  ],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Description",
      name: "description",
      type: "text"
    },
    {
      title: "Image",
      description: "Facebook recommends 1200x630 (will be auto resized)",
      name: "image",
      type: "image",
      fieldset: "image"
    },
    {
      name: "video",
      type: "video"
    }
  ],
  preview: {
    select: {
      title: "title",
      route: "route.slug.current",
      link: "link"
    },
    prepare({ title, route, link }) {
      return {
        title,
        subtitle: route
          ? `Route: /${route}/`
          : link
          ? `External link: ${link}`
          : "Not set"
      }
    }
  }
}
