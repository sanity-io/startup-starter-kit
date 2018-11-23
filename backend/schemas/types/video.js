export default {
  name: "video",
  title: "Video",
  type: "object",
  options: {
    collapsible: true
  },
  fields: [
    {
      name: "file",
      title: "File",
      type: "file"
    },
    {
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: ["video/mp4", "video/webm", "video/ogg"]
      }
    },
    {
      title: "Width",
      name: "width",
      type: "string"
    },
    {
      title: "Height",
      name: "height",
      type: "string"
    }
  ],
  preview: {
    select: {
      file: "file.asset.originalFilename",
      size: "file.asset.size",
      media: "media",
      type: "type"
    },
    prepare(selection) {
      return {
        title: selection.file,
        subtitle: `${Math.round(
          selection.size / 1024 / 1024
        )}Mb ${selection.type || ""} ${selection.media || ""}`
      }
    }
  }
}
