import { ColorSchemeInput } from "../../components/types/brand/ColorSchemeInput"

export default {
  name: "colorScheme",
  type: "object",
  title: "colorScheme",
  fields: [
    {
      name: "color",
      type: "color",
      title: "Text color"
    },
    {
      name: "accent",
      type: "color",
      title: "Accent color"
    },
    {
      name: "background",
      type: "color",
      title: "Background color"
    }
  ]
}
