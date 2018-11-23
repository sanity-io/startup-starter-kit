import React, { Fragment } from "react"
import { TwitterTweetEmbed } from "react-twitter-embed"

const extractID = (url = "") =>
  url.match(
    /(^|[^'"])(https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+))/
  )

const TwitterEmbed = props => {
  const { value } = props
  const { twitter } = value || {}
  return (
    <div style={{ margin: "1rem" }}>
      {twitter && extractID(twitter) ? (
        <TwitterTweetEmbed tweetId={extractID(twitter)[4]} />
      ) : (
        <div>Missing Twitter URL</div>
      )}
    </div>
  )
}

export default TwitterEmbed
