import React from 'react'
import styled from 'styled-components'
import FeatureDetail from '../components/FeatureDetail'
import GetStarted from '../containers/GetStarted'
import Layout from '../containers/Layout'
import SiteNav from '../containers/SiteNav'
import SiteFooter from '../containers/SiteFooter'
import { ThemeContext } from '../contexts'
import ModalStackProvider from '../providers/ModalStack'

const Content = styled.div`
  max-width: 48rem;
  padding: 1rem;
  margin: 0 auto;
`

const _data = {
  features: [
    {
      key: '1',
      title: 'Accelerometer',
      text:
        'Access the device accelerometer sensors to respond to changes in device motion in 3d space.',
      image: {
        src:
          'https://images.unsplash.com/photo-1421894054319-b4dcc51d41e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b423569480ca10c4ccc0a32610d76da3&auto=format&fit=crop&w=2250&q=80',
      },
    },
    {
      key: '2',
      title: 'Social Authentication',
      text:
        'Enable log in with the Facebook and Google native SDKs, or support any browser-based auth flow.',
      image: {
        src:
          'https://images.unsplash.com/photo-1536659622540-0b4c2331489c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eddc5aa28fe61f3ce407a29c10f57ea5&auto=format&fit=crop&w=2227&q=80',
      },
    },
    {
      key: '3',
      title: 'Camera',
      text:
        'Stream a preview of the device Camera capture, save photos, and configure hardware parameters like focus and white balance.',
      image: {
        src:
          'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d40e38088f9896824b508783a220bec&auto=format&fit=crop&w=3289&q=80',
      },
    },
    {
      key: '4',
      title: 'File System',
      text: 'Save and read assets, documents, and other data your users need.',
      image: {
        src:
          'https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a3dfc99e835e5c29b22f3397e7da32ae&auto=format&fit=crop&w=2253&q=80',
      },
    },
    {
      key: '5',
      title: 'Image Picker',
      text:
        'Import and manipulate photos and videos stored on the device, including the shared camera roll.',
      image: {
        src:
          'https://images.unsplash.com/photo-1534103704502-96e3a4ed093b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2e4b86f290c303d1789490a3319578e&auto=format&fit=crop&w=2256&q=80',
      },
    },
  ],
}

const FeaturesPage = ({ data }) => (
  <ModalStackProvider>
    {modalStackDepth => (
      <ThemeContext.Provider value={data.site.siteMetadata.theme}>
        <Layout overlay={modalStackDepth > 0}>
          <SiteNav />
          <Content>
            <h1>Features</h1>
            {_data.features.map(feature => (
              <FeatureDetail key={feature.key} {...feature} />
            ))}
          </Content>
          <GetStarted />
          <SiteFooter />
        </Layout>
      </ThemeContext.Provider>
    )}
  </ModalStackProvider>
)

export default FeaturesPage

export const query = graphql`
  {
    site {
      siteMetadata {
        theme {
          background
          color
        }
      }
    }
  }
`
