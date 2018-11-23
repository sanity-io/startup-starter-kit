import ChatBubble from "react-icons/lib/md/chat-bubble"
import TwitterEmbed from "../../previewComponents/twitterEmbed"
export default {
  name: "testimonial",
  type: "object",
  title: "Testimonial",
  icon: ChatBubble,
  fields: [
    {
      name: "name",
      type: "string",
      description: "Name of the person",
      title: "Name"
    },
    {
      name: "twitter",
      type: "url",
      title: "Twitter embed",
      description: "Paste URL to the twitter message",
      validation: Rule =>
        Rule.required().regex(/https:\/\/(twitter\.||t\.co).*/, "Twitter")
    }
  ],
  preview: {
    component: TwitterEmbed,
    select: {
      name: "name",
      twitter: "twitter"
    }
  }
}
