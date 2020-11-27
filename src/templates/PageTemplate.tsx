import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Page from '../components/Page'
import { useSiteMetadata } from '../hooks'
import { Node } from '../types'
interface Props {
  markdownRemark: Node
}
const PageTemplate:FC<Props> = ({ markdownRemark }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata()
  const { html: pageBody, frontmatter } = markdownRemark
  const { title: pageTitle, description: pageDescription = '', socialImage } = frontmatter
  const metaDescription = pageDescription || siteSubtitle
  const socialImageUrl = socialImage?.publicURL

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImageUrl} >
      <Sidebar />
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
  )
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        socialImage {
          publicURL
        }
      }
    }
  }
`

export default PageTemplate
