import ChatBubble from "react-icons/lib/md/chat-bubble"

export default {
  name: "testimonialCollection",
  type: "object",
  title: "TestimonialCollection",
  icon: ChatBubble,
  fields: [{
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "testimonials",
      type: "array",
      title: "Testimonials",
      of: [{
        type: "testimonial"
      }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type'
    }
  }
}
