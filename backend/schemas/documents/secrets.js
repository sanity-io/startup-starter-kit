import Key from "react-icons/lib/fa/key"

export default {
  name: "secrets",
  type: "document",
  title: "Secrets",
  icon: Key,
  fields: [
    {
      name: "googleApiKey",
      type: "string",
      title: "Google API Key"
    }
  ],
  preview: {
    select: {_id: 'id'},
    prepare: () => ({title: 'Secrets'})
  }
}
