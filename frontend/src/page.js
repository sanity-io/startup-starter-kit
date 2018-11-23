import React from 'react'
import FeatureDetailList from './components/FeatureDetailList'
import CallToAction from './components/CallToAction'
import Hero from './components/Hero'
import Layout from './containers/Layout'
import LatestUpdates from './containers/LatestUpdates'
import SiteNav from './containers/SiteNav'
import SiteFooter from './containers/SiteFooter'
import TestimonialCarousel from './components/TestimonialCarousel'
import ModalStackProvider from './providers/ModalStack'
import ThemeProvider from './providers/Theme'

import {
  mapArticleToProps,
  mapSharedHeroToHeroProps,
  mapSharedFeatureCollectionToFeatureCollectionProps,
  mapSharedLatestUpdatedToLatestUpdatedProps,
  mapSharedNavigationToSiteNavProps,
  mapSharedNavigationToSiteFooterProps,
  mapTestimonialCollectionToTestimonialCarouselProps,
  mapSharedCallToActionToCallToActionProps
} from './lib/mapToProps'
import Article from './components/Article'

const Page = ({ pageContext = {} }) => (
  <ThemeProvider>
    {theme => (
      <ModalStackProvider>
        {modalStackDepth => (
          <Layout overlay={modalStackDepth > 0}>
            {!pageContext.page && <div>No data</div>}
            {pageContext.page &&
              !pageContext.page.sections && <div>No sections</div>}
            {pageContext.page &&
              pageContext.page.sections &&
              pageContext.page.sections.map(section => {
                const { __typename, referencedSection = {} } = section
                switch (__typename) {
                  default:
                    switch (__typename) {
                      case 'SANITY_Article':
                        return (
                          <Article
                            key={section._key}
                            theme={theme}
                            {...mapArticleToProps(section)}
                          />
                        )
                      case 'SANITY_Hero':
                        return (
                          <Hero
                            key={section._key}
                            {...mapSharedHeroToHeroProps(section)}
                            theme={theme}
                          />
                        )
                      case 'SANITY_LatestUpdates':
                        return (
                          <LatestUpdates
                            key={section._key}
                            {...mapSharedLatestUpdatedToLatestUpdatedProps(
                              section
                            )}
                          />
                        )
                      case 'SANITY_FeatureCollection':
                        return (
                          <FeatureDetailList
                            key={section._key}
                            {...mapSharedFeatureCollectionToFeatureCollectionProps(
                              section
                            )}
                          />
                        )
                      case 'SANITY_Navigation':
                        switch (section.id) {
                          case 'mainNav':
                            return (
                              <SiteNav
                                key={section._key}
                                {...mapSharedNavigationToSiteNavProps(section)}
                              />
                            )
                          case 'footerNav':
                            return (
                              <SiteFooter
                                key={section._key}
                                {...mapSharedNavigationToSiteFooterProps(
                                  section
                                )}
                              />
                            )
                          default:
                            return (
                              <div key={section._key}>
                                Unknown navigation id: {section.id} (try <code>mainNav</code> or <code>footer</code>)
                              </div>
                            )
                        }
                      case 'SANITY_TestimonialCollection':
                        return (
                          <TestimonialCarousel
                            key={section._key}
                            {...mapTestimonialCollectionToTestimonialCarouselProps(
                              section
                            )}
                          />
                        )
                      case 'SANITY_CallToAction':
                        return (
                          <CallToAction
                            key={section._key}
                            {...mapSharedCallToActionToCallToActionProps(
                              section
                            )}
                            theme={theme}
                          />
                        )
                      default:
                        return (
                          <div key={section._id}>
                            Unknown section
                            {JSON.stringify({ __typename, section }, null, 2)}
                          </div>
                        )
                    }
                  case 'SANITY_SharedSection':
                    switch (referencedSection.__typename) {
                      case 'SANITY_SharedArticle':
                        return (
                          <Article
                            key={referencedSection._id}
                            {...mapArticleToProps(referencedSection)}
                            theme={theme}
                          />
                        )
                      case 'SANITY_SharedHero':
                        return (
                          <Hero
                            key={referencedSection._id}
                            {...mapSharedHeroToHeroProps(referencedSection)}
                            theme={theme}
                          />
                        )

                      case 'SANITY_SharedFeatureCollection':
                        return (
                          <FeatureDetailList
                            key={referencedSection._id}
                            {...mapSharedFeatureCollectionToFeatureCollectionProps(
                              referencedSection
                            )}
                          />
                        )

                      case 'SANITY_SharedLatestUpdates':
                        return (
                          <LatestUpdates
                            key={referencedSection._id}
                            {...mapSharedLatestUpdatedToLatestUpdatedProps(
                              referencedSection
                            )}
                          />
                        )

                      case 'SANITY_SharedNavigation':
                        switch (referencedSection.id) {
                          case 'mainNav':
                            return (
                              <SiteNav
                                key={referencedSection._id}
                                {...mapSharedNavigationToSiteNavProps(
                                  referencedSection
                                )}
                              />
                            )
                          case 'footerNav':
                            return (
                              <SiteFooter
                                key={referencedSection._id}
                                {...mapSharedNavigationToSiteFooterProps(
                                  referencedSection
                                )}
                              />
                            )
                          default:
                            return (
                              <div key={referencedSection._id}>
                                Unknown navigation id: {referencedSection.id} (try <code>mainNav</code> or <code>footer</code>)
                              </div>
                            )
                        }

                      case 'SANITY_SharedTestimonialCollection':
                        return (
                          <TestimonialCarousel
                            key={referencedSection._id}
                            {...mapTestimonialCollectionToTestimonialCarouselProps(
                              referencedSection
                            )}
                          />
                        )

                      case 'SANITY_SharedCallToAction':
                        return (
                          <CallToAction
                            key={referencedSection._id}
                            {...mapSharedCallToActionToCallToActionProps(
                              referencedSection
                            )}
                            theme={theme}
                          />
                        )

                      default:
                        return (
                          <pre key={referencedSection._id}>
                            {JSON.stringify(referencedSection, null, 2)}
                          </pre>
                        )
                    }
                }
              })}
          </Layout>
        )}
      </ModalStackProvider>
    )}
  </ThemeProvider>
)

export default Page
