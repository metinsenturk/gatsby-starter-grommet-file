import React from 'react'
import { graphql } from 'gatsby'
import { Box, Markdown, Heading, Text, Anchor, ResponsiveContext } from "grommet"
import { Previous } from "grommet-icons"
import ShareVia from '../components/share/share'
import SEO from '../components/seo/seo';
import { InternalLink } from '../components/internal/internal'

export default ({ data }) => {
  // console.log(data)
  const { frontmatter, rawMarkdownBody, fields } = data.markdownRemark
  const url = data.site.siteMetadata.siteUrl + '/blog/' + fields.slug.split('/')[1] + '/'

  const overrides = {
    p: {
      component: Text,
      props: { size: "medium", basis: "large" }
    },
    pre: {
      props: { size: "medium" }
    }
  }

  return (
    <>
      <SEO
        article={true}
        pathname="/blog/"
        title={frontmatter.title}
        desc={frontmatter.description}
        node={{
          url: url,
          title: frontmatter.title,
          created: frontmatter.created,
          updated: frontmatter.updated
        }} />
      <Box basis="large">
      <ResponsiveContext.Consumer>
          {(size) => {
            let pad = (size === 'small' || size === 'xsmall') ? "medium" : "xsmall"
            return (
              <Box pad={pad} justify="between" align="center" direction="row">
                <ShareVia />
                <InternalLink to='/blog/'>
                  <Anchor as="span" icon={<Previous />} label="Back" />
                </InternalLink>
              </Box>
            )
          }}
        </ResponsiveContext.Consumer>
        {/** TODO: temp solution to show footer, article does not fit its contents on mobile. */}
        <Box as="article" elevation="xsmall" overflow="auto" pad={{ horizontal: "medium", vertical: "xsmall" }}>
          <Heading>{frontmatter.title}</Heading>
          <Text>{frontmatter.date}</Text>
          <Markdown components={overrides}>
            {rawMarkdownBody}
          </Markdown>
        </Box>
      </Box>
    </>
  )
}

export const query = graphql`
  query BlogDatabySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      rawMarkdownBody
      wordCount {
        paragraphs
        sentences
        words
      }
      timeToRead
      frontmatter {
        title
        description
        date
        created
        updated
      }
      fields {
        slug
      }
    }
  }
`
