export default {
  title: "Call to action",
  name: "cta",
  type: "object",
  fieldsets: [
    {
      title: "Link",
      name: "link"
    }
  ],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Internal page (route)",
      name: "route",
      type: "reference",
      to: [{ type: "route" }],
      fieldset: "link"
    },
    {
      title: "External link",
      name: "link",
      type: "url",
      fieldset: "link"
    },
    {
      title: "Priority/style",
      name: "priority",
      type: "string",
      options: {
        list: ["primary", "secondary", "transparent"]
      }
    },
    {
      title: "Size",
      name: "size",
      type: "string",
      options: {
        list: ["big", "large", "default", "small"]
      }
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
