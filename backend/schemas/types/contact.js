export default {
  name: "contact",
  type: "object",
  title: "contact",
  fields: [
    {
      name: "telephone",
      type: "string",
      title: "Telephone"
    },
    {
      name: "email",
      type: "email",
      title: "Email"
    },
    {
      name: "github",
      type: "string",
      description: "Full GitHub URL",
      title: "GitHub"
    },
    {
      name: "twitter",
      type: "string",
      description: "@yourCompany",
      title: "Twitter"
    },
    {
      name: "instagram",
      type: "string",
      description: "Full Instagram URL",
      title: "Instagram"
    },
    {
      name: "facebook",
      type: "url",
      description: "Full Facebook Page URL",
      title: "Facebook Page"
    },
    {
      name: "crunchbase",
      type: "url",
      description: "Full Crunchbase URL",
      title: "Crunchbase"
    }
  ]
}
