// Set up Sanity client
const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: require('../../backend/sanity.json').api.projectId,
  dataset: require('../../backend/sanity.json').api.dataset,
  useCdn: false,
  /* token: process.env.SANITY_TOKEN */
})

exports.handler = async function(event, context, callback) {
  /**
   * Parse the response from Google Assistant
   */
  const body = JSON.parse(event.body)
  const {
    queryResult: {
      intent: {
        name = '',
        displayName = ''
      } = {}
    } = {}
  } = body

  /**
   * Fetch the fulfillment from Sanity
   */
  const response = await client.fetch(`
  *[_type == 'intent' && title == $displayName][0]{
    ...,
    fulfillment->
  }
  `, { displayName }).catch(errorHandler)

  /**
   * Parse Portable Text into SSML
   */
  const ssmlToText = blocksToText(response.fulfillment.fulfillments[0].response)

  /**
   * Return the text to Google Assistant
   */
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      fulfillmentText: ssmlToText
    })
  })


  function errorHandler(error) {
    callback(null, {
      statusCode: 500,
      body: 'error'
    })
  }
}


const defaults = {nonTextBehavior: 'remove'}

function blocksToText(blocks, opts = {}) {
  const options = Object.assign({}, defaults, opts)
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`
      }

      return block.children.map(child => child.text).join('')
    })
    .join('\n\n')
}