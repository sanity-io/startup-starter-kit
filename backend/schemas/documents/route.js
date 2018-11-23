import Route from "react-icons/lib/md/link"
export default {
  name: "route",
  type: "document",
  title: "Route",
  icon: Route,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "This title populates meta-tags on the webpage"
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title"
      }
    },
    {
      name: "page",
      type: "reference",
      to: [{ type: "page" }]
    },
    {
      title: "Open graph",
      name: "openGraph",
      type: "openGraph"
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current"
    }
  }
}
