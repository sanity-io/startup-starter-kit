export default {
  type: "object",
  title: "Latest Updates",
  name: "latestUpdates",
  fields: [{
    name: "title",
    title: "Title",
    type: "string"
  }],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type'
    }
  }
}
