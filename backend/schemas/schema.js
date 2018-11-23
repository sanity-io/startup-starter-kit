// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"
// Schema utilities
import { convertToSharedSection } from "./utilities"
import sharedSection from "./sections/sharedSections"
import * as sections from "./sections"
import * as components from "./components"
import * as types from "./types"
import * as documents from "./documents"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    sharedSection,
    ...Object.values(documents),
    ...Object.values(types),
    ...Object.values(components),
    ...Object.values(sections),
    ...Object.values(sections).map(convertToSharedSection)
  ])
})
