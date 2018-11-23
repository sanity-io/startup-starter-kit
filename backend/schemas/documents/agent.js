import React from "react"
const Robot = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 640 512"
    height="1em"
    width="1em"
    color="#333"
  >
    <path
      d="M0 256v128c0 17.7 14.3 32 32 32h32V224H32c-17.7 0-32 14.3-32 32zM464 96H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H176c-44.2 0-80 35.8-80 80v272c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V176c0-44.2-35.8-80-80-80zM256 416h-64v-32h64v32zm-32-120c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm128 120h-64v-32h64v32zm96 0h-64v-32h64v32zm-32-120c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-72h-32v192h32c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32z"
      stroke="none"
    />
  </svg>
)

export default {
  name: "agent",
  type: "document",
  title: "Agent",
  icon: Robot,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name"
    },
    {
      name: "description",
      type: "text"
    },
    {
      name: "language",
      type: "string",
      title: "Language",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Danish", value: "da" },
          { title: "German", value: "de" },
          { title: "Spanish", value: "es" },
          { title: "French", value: "fr" },
          { title: "Hindi", value: "hi" },
          { title: "Indonesian", value: "id" },
          { title: "Italian", value: "it" },
          { title: "Japanese", value: "ja" },
          { title: "Korean (South Korea)", value: "ko" },
          { title: "Dutch", value: "nl" },
          { title: "Norwegian", value: "no" },
          { title: "Portugese (European)", value: "pt" },
          { title: "Portugese (Brazilian)", value: "pt-br" },
          { title: "Russian", value: "ru" },
          { title: "Swedish", value: "sv" },
          { title: "Thai", value: "th" },
          { title: "Ukrainain", value: "uk" },
          { title: "Chinese (Simplified)", value: "zh-cn" },
          { title: "Chinese (Hong Kong)", value: "zh-hk" },
          { title: "Chinese (Traditional)", value: "zh-tw" }
        ]
      }
    },
    {
      name: 'ssmlGender',
      title: 'Voice Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Unspecificed', value: 'SSML_VOICE_GENDER_UNSPECIFIED'},
          { title: 'Male', value: 'SSML_VOICE_GENDER_MALE	'},
          { title: 'Female', value: 'SSML_VOICE_GENDER_FEMALE'},
          { title: 'Neutral', value: 'SSML_VOICE_GENDER_NEUTRAL'},
        ]
      }
    },
    {
      name: "disableInteractionLogs",
      type: "boolean",
      title: "Disable Interaction Logs"
    },
    {
      name: "googleAssistant",
      type: "googleAssistant"
    },
    {
      name: "webhook",
      type: "webhook"
    }
  ]
}
