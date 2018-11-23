import Flash from "react-icons/lib/ti/flash-outline"

export default {
  name: "fulfillment",
  type: "document",
  title: "Fulfillment",
  icon: Flash,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "fulfillments",
      type: "array",
      title: "Fulfillments",
      of: [
        {
          name: "fulfillment",
          type: "object",
          fields: [
            {
              name: "response",
              type: "response"
            }
          ],
          preview: {
            select: {
              blocks: "response"
            },
            prepare(value) {
              const block = (value.blocks || []).find(
                block => block._type === "block"
              )
              return {
                title: block
                  ? block.children
                      .filter(child => child._type === "span")
                      .map(span => span.text)
                      .join("")
                  : "No title"
              }
            }
          }
        }
      ]
    }
  ]
}
