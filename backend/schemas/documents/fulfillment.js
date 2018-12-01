import Flash from 'react-icons/lib/ti/flash-outline'

export default {
  name: 'fulfillment',
  type: 'document',
  title: 'Fulfillment',
  icon: Flash,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'fulfillments',
      type: 'array',
      title: 'Fulfillments',
      of: [
        {
          name: 'fulfillment',
          type: 'object',
          fields: [
            {
              name: 'response',
              type: 'response'
            }
          ]
        }
      ]
    }
  ]
}
