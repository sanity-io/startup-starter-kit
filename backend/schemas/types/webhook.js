export default {
  name: "webhook",
  type: "object",
  title: "Webhook",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Url"
    },
    {
      name: "headers",
      type: "array",
      title: "Headers",
      of: [{ type: "keyValue" }]
    }
  ]
}
