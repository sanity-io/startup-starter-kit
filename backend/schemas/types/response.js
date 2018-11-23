import React, { Fragment } from "react"
import STEditor from "../../previewComponents/SSMLeditor/STEditor"

export default {
  title: "Response",
  name: "response",
  type: "array",
  inputComponent: STEditor,
  of: [
    {
      title: "Block",
      type: "block",
      lists: [],
      marks: {
        decorators: [],
        annotations: [
          {
            title: "Prosody",
            name: "prosody",
            description: `Control of the pitch, speaking rate and volume.`,
            type: "object",
            blockEditor: {
              icon: () => "🔊",
              render: ({ children, volume }) => (
                <span>
                  {children} {["x-loud", "loud"].includes(volume) ? "🔊" : "🔈"}
                </span>
              )
            },
            fields: [
              {
                name: "rate",
                title: "Rate",
                description:
                  "A change in the speaking rate for the contained text",
                type: "string",
                options: {
                  list: [
                    { value: "x-slow", title: "x-slow" },
                    { value: "slow", title: "slow" },
                    { value: "medium", title: "medium" },
                    { value: "fast", title: "fast" },
                    { value: "x-fast", title: "x-fast" },
                    { value: "default", title: "default" }
                  ]
                }
              },
              {
                name: "pitch",
                title: "Pitch",
                description: "The baseline pitch for the contained text",
                type: "string",
                options: {
                  list: [
                    { value: "x-low", title: "x-low" },
                    { value: "low", title: "low" },
                    { value: "medium", title: "medium" },
                    { value: "high", title: "high" },
                    { value: "x-high", title: "x-high" },
                    { value: "default", title: "default" }
                  ]
                }
              },
              {
                name: "volume",
                title: "Volume",
                type: "string",
                description: "The volume for the contained text.",
                options: {
                  list: [
                    { value: "silent", title: "silent" },
                    { value: "x-soft", title: "x-soft" },
                    { value: "medium", title: "medium" },
                    { value: "loud", title: "loud" },
                    { value: "x-loud", title: "x-loud" },
                    { value: "default", title: "default" }
                  ]
                }
              }
            ]
          },
          {
            title: "Alias (sub)",
            name: "sub",
            description:
              "The sub element is employed to indicate that the text in the alias attribute value replaces the contained text for pronunciation. This allows a document to contain both a spoken and written form.",
            type: "object",
            blockEditor: {
              icon: () => "🔤",
              render: props => <span>{props.children} 🔤</span>
            },
            fields: [
              {
                name: "alias",
                title: "Text",
                type: "string"
              }
            ]
          },
          {
            title: "Emphasis",
            name: "emphasis",
            type: "object",
            blockEditor: {
              icon: () => "🗯",
              render: props => <span>{props.children} 🗯</span>
            },
            fields: [
              {
                name: "level",
                type: "string",
                options: {
                  list: [
                    { value: "strong", title: "Strong" },
                    { value: "moderate", title: "Moderate" },
                    { value: "none", title: "None" },
                    { value: "reduced", title: "Reduced" }
                  ]
                }
              }
            ]
          },
          {
            title: "Say as",
            name: "sayAs",
            description: `Lets you indicate information about the type of
            text construct that is contained within the element.
            It also helps specify the level of detail for rendering
            the contained text.`,
            type: "object",
            fields: [
              {
                name: "interpretAs",
                type: "string",
                options: {
                  list: [
                    { value: "cardinal", title: "Cardinal numbers" },
                    {
                      value: "ordinal",
                      title: "Ordinal numbers (1st, 2nd, 3th..."
                    },
                    { value: "characters", title: "Spell out characters" },
                    { value: "fraction", title: "Say numbers as fractions" },
                    { value: "expletive", title: "Blip out this word" },
                    {
                      value: "unit",
                      title: "Adapt unit to singular or plural"
                    },
                    {
                      value: "verbatim",
                      title: "Spell out letter by letter (verbatim)"
                    },
                    { value: "date", title: "Say as a date" },
                    { value: "telephone", title: "Say as a telephone number" }
                  ]
                }
              },
              {
                name: "date",
                type: "object",
                title: "Date",
                fields: [
                  {
                    name: "format",
                    type: "string",
                    description: `The format attribute is a sequence of date field character codes.
                    Supported field character codes in format are {y, m, d} for year, month,
                    and day (of the month) respectively. If the field code appears once
                    for year, month, or day then the number of digits expected are
                    4, 2, and 2 respectively. If the field code is repeated then
                    the number of expected digits is the number of times the code is
                    repeated. Fields in the date text may be separated by punctuation
                    and/or spaces.`
                  },
                  {
                    name: "detail",
                    type: "number",
                    validation: Rule =>
                      Rule.required()
                        .min(0)
                        .max(2),
                    description: `The detail attribute controls the spoken form of the date.
                    For detail='1' only the day fields and one of month or year
                    fields are required, although both may be supplied`
                  }
                ]
              }
            ],
            blockEditor: {
              icon: () => "🗣",
              render: props => <span>{props.children} 🗣</span>
            }
          },
          {
            name: "break",
            title: "Break",
            description: `An empty element that controls pausing or other
            prosodic boundaries between words.`,
            type: "object",
            blockEditor: {
              icon: () => "⏸",
              render: ({ children, strength, time }) => {
                if (!Number.isNaN(strength)) {
                  return (
                    <span>
                      {children} {"⏸".repeat(strength || 1)}
                    </span>
                  )
                }
                if (time) {
                  return (
                    <span>
                      {children} ⏸⏱ ({time} ms){" "}
                    </span>
                  )
                }
                return <span>{children}</span>
              }
            },
            fields: [
              {
                name: "time",
                title: "Time in milliseconds",
                type: "number",
                validation: Rule => Rule.min(0)
              },
              {
                name: "strength",
                type: "number",
                description: `The value "none" indicates that no prosodic
                break boundary should be outputted, which can be used to
                prevent a prosodic break that the processor would otherwise produce.
                The other values indicate monotonically non-decreasing (conceptually increasing)
                break strength between tokens.The stronger boundaries are typically
                accompanied by pauses.`,
                options: {
                  list: [
                    { value: 1, title: "x-weak" },
                    { value: 2, title: "weak" },
                    { value: 3, title: "medium" },
                    { value: 4, title: "strong" },
                    { value: 5, title: "x-strong" }
                  ]
                }
              }
            ]
          },
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url"
              }
            ]
          }
        ]
      }
    }
  ]
}
