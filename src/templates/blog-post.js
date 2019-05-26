import React from 'react'
import { graphql } from 'gatsby'
import { Box, Heading, Text, Anchor, ResponsiveContext, Paragraph } from "grommet"
import { Previous } from "grommet-icons"
import ShareVia from '../components/share/share'
import SEO from '../components/seo/seo';
import { InternalLink } from '../components/internal/internal'
import PreviousNext from '../components/pagination/prevnext';

export default ({ data, pageContext }) => {
  const { siteUrl, social } = data.site.siteMetadata
  const { frontmatter, html, fields, wordCount } = data.markdownRemark
  const url = siteUrl + '/blog/' + fields.slug.split('/')[1] + '/'
  const pathname = "/blog/"

  // eslint-disable-next-line 
  const overrides = {
    p: {
      // component: Paragraph,
      props: { size: "medium" }
    },
    pre: {
      props: { size: "medium" }
    }
  }

  return (
    <>
      <SEO
        article={true}
        pathname={pathname}
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
            let pad = (size === 'small' || size === 'xsmall') ? "large" : "xsmall";
            return (
              <Box pad={{ vertical: pad, horizontal: "xsmall" }} justify="between" align="center" direction="row">
                <ShareVia url={url} title={frontmatter.title} excerpt={frontmatter.excerpt} hashtags={['gatsby', 'sd']} via={social.twitter} />
                <InternalLink to={`/blog/`}>
                  <Anchor as="span" icon={<Previous />} label="Back" />
                </InternalLink>
              </Box>
            )
          }}
        </ResponsiveContext.Consumer>
        {/** TODO: temp solution to show footer, article does not fit its contents on mobile. */}
        <Box as="article" elevation="xsmall" overflow="auto" pad={{ horizontal: "medium", vertical: "xsmall" }}>
          <Heading>{frontmatter.title}</Heading>
          <Box direction="row" gap="xsmall">
            <Text>Written at {frontmatter.date}, </Text>
            <Text>{wordCount.paragraphs} paragraphs, </Text>
            <Text>{wordCount.sentences} sentences, </Text>
            <Text>{wordCount.words} words.</Text>
          </Box>
          <Paragraph>{frontmatter.description}</Paragraph>
          <br />
          <Box
            style={{ maxWidth: 'auto' }}
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
          {/** <Markdown overrides /> does not align well the code. Temporarily setting html will do the work. */}
        </Box>
        <PreviousNext pageContext={pageContext} pathname={pathname} />
      </Box>
    </>
  )
}

export const query = graphql`
  query BlogDatabySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        social {
          twitter
        }
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
        tags
      }
      fields {
        slug
      }
    }
  }
`
