// Set up Sanity client
const sanityClient = require('@sanity/client')
const blockToHTML = require('@sanity/block-content-to-html')
const serializers = require('../utils/SSMLSerializer')
const blocksToText = require('../utils/blocksToText')
const sample = require('lodash/sample')
const client = sanityClient({
  projectId: require('../../backend/sanity.json').api.projectId,
  dataset: require('../../backend/sanity.json').api.dataset,
  useCdn: false
  /* token: process.env.SANITY_TOKEN */
})

exports.handler = async function (event, context, callback) {
  try {
    /**
     * Parse the response from Google Assistant
     */
    const body = JSON.parse(event.body)
    log({ body })
    const {
      queryResult: { intent: { name = '', displayName = '' } = {} } = {}
    } = body
    log({ displayName })
    if (!displayName) {
      return errorHandler('Missing intent name')
    }
    /**
     * Fetch the fulfillment from Sanity
     */
    const assistant = await client
      .fetch(
        `{
          "fulfillment": *[_type == 'intent' && title == $displayName][0]{
            fulfillment->
          },
          "agent": *[_type == 'agent' && _id == 'agent'][0]
        }
  `,
        { displayName }
      )
      .catch(errorHandler)
    log({assistant})
    const { agent, fulfillment } = assistant
    log({ agent, fulfillment })
    /**
     * Pick a random response from the fulfillment array
     */
    const pickRandomFulfillment = sample(fulfillment.fulfillments)
    log({ pickRandomFulfillment })
    /**
     * Parse Portable Text into SSML
     */
    if (!pickRandomFulfillment.response) {
      return errorHandler('Missing response')
    }
    const portableTextToSSML = blockToHTML({
      blocks: pickRandomFulfillment.response,
      serializers
    })
    const simpleText = blocksToText(pickRandomFulfillment.response)

    /**
     * Return the text to Google Assistant
     */
    callback(null, {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        payload: {
          google: {
            expectUserResponse: false,
            richResponse: {
              items: [
                {
                  simpleResponse: {
                    textToSpeech: portableTextToSSML,
                    displayText: simpleText
                  }
                }
              ]
            }
          }
        }
      })
    })
  } catch (err) {
    console.error(err)
  }

  function errorHandler (error) {
    log(error)
    callback(null, {
      statusCode: 500,
      body: 'error'
    })
  }
}

function log (props) {
  /* if (!process.env.DEV) {
    return null
  } */
  return console.log(props)
}
