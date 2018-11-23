import Speech from "react-icons/lib/md/chat-bubble-outline"

export default {
  name: "intent",
  type: "document",
  title: "Intent",
  icon: Speech,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "phrases",
      type: "array",
      description: "Add training phrases that captures the intent",
      title: "Phrases",
      of: [
        {
          type: "string"
        }
      ]
    },
    {
      name: "fulfillment",
      type: "reference",
      to: [{ type: "fulfillment" }]
    },
    {
      name: "id",
      type: "string",
      title: "Google Assistant ID",
      readOnly: true
    }
  ]
}
