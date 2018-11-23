export function mapArticleToProps ({title, bodyRaw}) {
  return {
    headline: title,
    introBlockContent: [],
    publishedAt: undefined,
    media: false,
    blockContent: bodyRaw
  }
}
export function mapNavItemToProps ({_type, _key, title, internal, external, text, navItems = []}) {
  if (_type === 'navSection') {
    return {
      key: _key,
      title: title,
      items: (navItems || []).map(mapNavItemToProps)
    }
  }

  if (internal) {
    return {
      key: _key,
      internal: true,
      title: text,
      to: `/${internal.slug.current}/`
    }
  }

  return {
    key: _key,
    internal: false,
    title: text,
    to: external
  }
}

export function mapSharedNavigationToSiteNavProps ({navItems = []}) {
  return {
    menu: {
      items: (navItems || []).map(mapNavItemToProps)
    }
  }
}

export function mapSharedNavigationToSiteFooterProps ({navItems}) {
  return {
    items: (navItems || []).map(mapNavItemToProps)
  }
}

export function mapSharedFeatureCollectionToFeatureCollectionProps (data) {
  const { title, features = [] } = data
  return {
    headline: title,
    features: (features || []).map(feature => ({
      key: feature._id,
      title: feature.title,
      descriptionBlock: feature.descriptionRaw,
      illustration: feature.illustration
    })),
    _source: data
  }
}

export function mapSharedHeroToHeroProps ({ title, tagLineRaw, ctas = [] }) {
  return {
    headline: title,
    tagLineBlock: tagLineRaw,
    callToActions: (ctas || []).map(cta => ({
      _key: cta._key,
      link: cta.link,
      title: cta.title
    }))
  }
}

export function mapTestimonialCollectionToTestimonialCarouselProps ({
  testimonials = []
}) {
  return {
    headline: 'Testimonials',
    testimonials: (testimonials || []).map(testimonial => ({
      key: testimonial._key,
      type: 'twitter',
      name: testimonial.name,
      url: testimonial.twitter
    }))
  }
}

export function mapSharedCallToActionToCallToActionProps ({
  title,
  introRaw,
  buttons = []
}) {
  return {
    headline: title,
    introBlockContent: introRaw,
    callToActions: (buttons || []).map(button => ({
      key: button._key,
      title: button.title,
      to: `/${button.route.slug.current}/`
    }))
  }
}

export function mapSharedLatestUpdatedToLatestUpdatedProps ({title}) {
  return {
    headline: title
  }
}
