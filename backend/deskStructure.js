
import S from "@sanity/desk-tool/structure-builder";
import * as components from './schemas/components/index'
import * as sections from './schemas/sections/index'
const hiddenTypes = [
  "companyInfo",
  "page",
  "route",
  "intent",
  "agent",
  "fulfillment",
  ...Object.values(components).reduce((acc, {name}) => ([...acc, name, `shared.${name}`]), []),
  ...Object.values(sections).reduce((acc, {name}) => ([...acc, name, `shared.${name}`]), [])
]
const hiddenDocTypes = listItem => !hiddenTypes.includes(listItem.getId())

const sectionItems = S.listItem()
  .title('Shared sections')
  .child(
    S.list("Shared sections")
      .id('shared-sections')
      .title('Shared sections')
      .items([
        ...Object.values(sections).map(({name, title}) => S.documentTypeListItem(`shared.${name}`).title(title))
      ])
  )

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Company Info")
        .schemaType("companyInfo")
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType("companyInfo")
            .documentId("company-info")
        ),
      S.listItem()
      .title('Website')
      .schemaType("page")
      .child(
        S.list()
        .title("Website")
        .id('website')
        .items([
          /* S.documentTypeListItem('navigation').title('Navigation'), */
          S.documentTypeListItem('route').title('Routes') ,
          S.documentTypeListItem('page').title('Pages'),
          sectionItems
          /* ...Object.values(components).map(({name}) => ([S.documentTypeListItem(name), S.documentTypeListItem(`shared${name}`)])) */
          /* ...Object.values(sections).reduce(makeDocumentsAndObjects, []).map(name => S.documentTypeListItem(name).title(name)) */
        ])
      ),
      S.listItem()
        .title('Assistant')
        .schemaType("agent")
        .child(
          S.list()
          .title('Assistant')
          .id('assistant')
          .items([
            S.listItem()
            .title("Agent")
            .schemaType("agent")
            .child(
              S.editor()
                .id('agent')
                .schemaType("agent")
                .documentId("agent")
              ),
            S.documentTypeListItem('intent').title('Intents'),
            S.documentTypeListItem('fulfillment').title('Fulfillments'),
          ])
        ),
      ...S.documentTypeListItems()
        .filter(hiddenDocTypes)
    ])
