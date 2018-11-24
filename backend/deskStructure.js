
import S from "@sanity/desk-tool/structure-builder";
import * as components from './schemas/components/index'
import * as sections from './schemas/sections/index'
console.log(Object.values(components))
const hiddenTypes = [
  "companyInfo",
  "page",
  "route",
  ...Object.values(components).reduce((acc, {name}) => ([...acc, name, `shared.${name}`]), []),
  ...Object.values(sections).reduce((acc, {name}) => ([...acc, name, `shared.${name}`]), [])
]
console.log({hiddenTypes})
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
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType("companyInfo")
            .documentId("company-info")
        ),
      S.listItem()
      .title('Website')
      .child(
        S.list()
        .title("Website")
        .id('website')
        .items([
          S.documentTypeListItem('route').title('Routes') ,
          S.documentTypeListItem('page').title('Pages'),
          sectionItems
          /* ...Object.values(components).map(({name}) => ([S.documentTypeListItem(name), S.documentTypeListItem(`shared${name}`)])) */
          /* ...Object.values(sections).reduce(makeDocumentsAndObjects, []).map(name => S.documentTypeListItem(name).title(name)) */
        ])
      ),
      ...S.documentTypeListItems()
        .filter(hiddenDocTypes)
    ])
