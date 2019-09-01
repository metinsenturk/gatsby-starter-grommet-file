import React from 'react'
import { graphql } from 'gatsby'
import { Heading, Box, Paragraph } from 'grommet'
// import { Image } from 'grommet'
import SEO from '../components/seo/seo';
// eslint-disable-next-line
import Img from 'gatsby-image'

export default ({ data }) => {
  const about = data.about.edges[0].node

  // eslint-disable-next-line
  const overrides = {
    //img: { component: Image, props: { fit: "cover" } },
    pre: { props: { size: "large" } },
    p: { component: Paragraph, props: { size: "medium" } }
  }

  return (
    <>
      <SEO
        pathname="/about/"
        title="About myself."
        desc=""
      />
      <Box basis="large">
        <Box gap="medium" elevation="xsmall" >
          {/*<Box >
            <Img fluid={about.frontmatter.cover.childImageSharp.fluid} />
          </Box>*/}
          <Box pad={{ horizontal: "medium", vertical: "xsmall" }}>
            <Heading> {about.frontmatter.title}</Heading>            
            <Box
            as="article"
              style={{ maxWidth: 'auto' }}
              dangerouslySetInnerHTML={{
                __html: about.html,
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export const query = graphql`
query {
    about: allMarkdownRemark(filter: {fields: {slug: {eq: "/about-me/"}}}) {
        edges {
          node {
            html
            rawMarkdownBody
            frontmatter {
              title
              description
              date
              cover {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
  }
`