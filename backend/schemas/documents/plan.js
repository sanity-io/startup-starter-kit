import Card from "react-icons/lib/fa/credit-card"

export default {
  name: "plan",
  type: "document",
  title: "Plan",
  icon: Card,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "price",
      type: "number",
      title: "Price"
    },
    {
      name: "priceType",
      type: "string",
      title: "Price type",
      description: "Monthly, pr. item, etc"
    },
    {
      name: "features",
      type: "array",
      of: [
        {
          type: "keyValue"
        },
        {
          type: "reference",
          to: [
            {
              type: "feature"
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "title",
      price: "price",
      priceType: "priceType",
      features: "features"
    },
    prepare({ title, price, priceType, features }) {
      console.log(title, price, priceType, features)
      return {
        title,
        subtitle: `${price} ${priceType}`
      }
    }
  }
}

/**
 * plans
    array[]
        plan
            title
            price
            array => referenes => (string | features)

 */
