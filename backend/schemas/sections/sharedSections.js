import Repeat from "react-icons/lib/md/repeat"
import * as sections from "./index"

export default {
  type: "object",
  name: "sharedSection",
  title: "Shared section",
  fields: [
    {
      name: "referencedSection",
      type: "reference",
      to: Object.values(sections).map(({ name, title }) => ({
        type: `shared.${name}`,
        title
      }))
    }
  ],
  preview: {
    select: {
      title: "referencedSection.title",
      heading: "referencedSection.heading",
      name: "referencedSection.name",
      subtitle: "referencedSection._type"
    },
    prepare({ title, heading, name, subtitle }) {
      return {
        title: title || heading || name || "No title",
        subtitle
      }
    }
  }
}
