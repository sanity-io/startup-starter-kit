/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
// Restart the dev server when you change the query
exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
  query {
    sanity {
      allPosts {
        featuredImage {
          alt
          asset {
            url
          }
        }
        title
        publishedAt
        slug {
          current
        }
        introRaw
        contentRaw
      }
      allRoutes {
        _id
        slug {
          current
        }
        page {
          title
          sections {
            __typename
            ... on SANITY_SharedSection {
              _key
              _type
              referencedSection {
                __typename
                ...on SANITY_SharedArticle {
                  _id
                  title
                  bodyRaw
                }
                ... on SANITY_SharedLatestUpdates {
                  _id
                  title
                }
                ... on SANITY_SharedCallToAction {
                  _id
                  title
                  introRaw
                  buttons {
                    ... on SANITY_Cta {
                      _key
                      title
                      link
                      route {
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                ... on SANITY_SharedHero {
                  _id
                  _type
                  title
                  tagLineRaw
                  ctas {
                    _key
                    link
                    title
                  }
                }
                ... on SANITY_SharedFeatureCollection {
                  _id
                  _type
                  title
                  features {
                    _id
                    title
                    descriptionRaw
                    illustration {
                      asset {
                        url
                      }
                    }
                  }
                }
                ... on SANITY_SharedTestimonialCollection {
                  _id
                  _type
                  testimonials {
                    _key
                    _type
                    name
                    twitter
                  }
                }
                ... on SANITY_SharedNavigation {
                  _id
                  _type
                  id
                  navItems {
                    ... on SANITY_NavSection {
                      _key
                      _type
                      title

                      navItems {
                        ... on SANITY_NavItem {
                          _key
                          _type
                          text
                          external
                          internal {
                            ... on SANITY_Route {
                              _id
                              slug {
                                current
                              }
                            }
                          }
                        }
                      }
                    }

                    ... on SANITY_NavItem {
                      _key
                      _type
                      text
                      external
                      internal {
                        ... on SANITY_Route {
                          _id
                          slug {
                            current
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            ... on SANITY_Navigation {
              _key
              id
              navItems {
                ... on SANITY_NavItem {
                  text
                  external
                  internal {
                    ... on SANITY_Route {
                      _id
                      slug {
                        current
                      }
                    }
                  }
                }

                ... on SANITY_NavSection {
                  title
                }
              }
            }
            ... on SANITY_TestimonialCollection {
              _key
              testimonials {
                _key
                _type
                twitter
              }
            }
            ... on SANITY_CallToAction {
              _key
              title
              introRaw
              buttons {
                _key
                title
              }
            }
            ... on SANITY_LatestUpdates {
              _key
              title
            }
            ... on SANITY_Article {
              _key
              title
              bodyRaw
            }
            ... on SANITY_FeatureCollection {
               _key
              title
              features {
                _key
                title
                descriptionRaw
              }
            }
            ... on SANITY_Hero {
              _key
              title
              tagLineRaw
              ctas {
                    _key
                    link
                    title
                  }
            }
          }
        }
      }
    }
  }
  `)

  data.sanity.allPosts.forEach(post => {
    console.log("post", post.slug.current)
    actions.createPage({
      path: `/blog/${post.slug.current}/`,
      component: path.resolve(`./src/post.js`),
      context: {
        _id: post._id,
        post
      }
    })
  })

  data.sanity.allRoutes.forEach(({ _id, slug, page }) => {
    console.log("route", slug.current)
    actions.createPage({
      path: slug.current === "/" ? "/" : `/${slug.current}/`,
      component: path.resolve(`./src/page.js`),
      context: {
        _id,
        page
      }
    })
  })
}
