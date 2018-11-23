import { CompanyNameInput } from "../../components/types/brand/CompanyNameInput"
import { LogoInput } from "../../components/types/brand/LogoInput"
import { BrandInput } from "../../components/types/brand/BrandInput"

export default {
  name: "brand",
  type: "object",
  title: "Brand info",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Company name",
      description: "Enter your company name or get a random name from the Crunchbase machine learned company name generator",
      inputComponent: CompanyNameInput
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
      inputComponent: LogoInput
    },
    {
      name: "colorScheme",
      type: "colorScheme"
    },
    {
      name: "tagline",
      type: "string",
      title: "Tagline"
    }
  ],
  inputComponent: BrandInput
}
