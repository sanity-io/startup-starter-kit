export default {
  name: "keyValue",
  type: "object",
  title: "KeyValue",
  fields: [
    {
      name: "key",
      type: "string",
      title: "Key"
    },
    {
      name: "value",
      type: "string",
      title: "Value"
    }
  ],
  preview: {
    select: {
      title: "key",
      subtitle: "value"
    }
  }
}
