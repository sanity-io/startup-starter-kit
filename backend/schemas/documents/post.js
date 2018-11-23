export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "intro",
      type: "simpleBlockContent",
      title: "Intro"
    },
    {
      name: "content",
      type: "simpleBlockContent",
      title: "Content"
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title"
      }
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Schedule publishing date"
    },
    {
      name: "featuredImage",
      type: "illustration"
    },
    {
      name: "openGraph",
      type: "openGraph",
      title: "Configure SEO fields (Open Graph)"
    }
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
      date: "publishedAt",
      media: "featuredImage"
    },
    prepare({ title, slug, date, media }) {
      return {
        title,
        subtitle: date
          ? `/news/${new Date(date).getFullYear()}/${new Date(
              date
            ).getMonth()}/${slug}`
          : "Publish date not set",
        media
      }
    }
  }
}
