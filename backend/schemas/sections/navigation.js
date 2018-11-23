import Nav from "react-icons/lib/md/navigation"
export default {
  name: "navigation",
  type: "object",
  title: "Navigation",
  icon: Nav,
  fields: [{
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "id",
      type: "string",
      title: "Id"
    },
    {
      name: "navItems",
      type: "array",
      title: "Navigation items",
      of: [{
        type: "navItem"
      }, {
        type: "navSection"
      }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type'
    }
  }
}
