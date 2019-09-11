import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Heading, Box, Text } from 'grommet'
import { CardLink } from '../components/internal/internal'
import Pagination from '../components/pagination/pagination';
import SEO from '../components/seo/seo';
import Subscribe from '../components/subscribe/subscribe'

class Blog extends Component {
  render() {
    const meta = this.props.data.site.siteMetadata.metaBlog
    const posts = this.props.data.allMarkdownRemark.edges
    const pageInfo = this.props.data.allMarkdownRemark.pageInfo
    const pathname = "/blog/"
    
    return (
      <>
        <SEO
          pathname={pathname}
          title={meta.title}
          desc={meta.description}
        />
        <Box align="center" gap="medium">        
          {posts.map(({ node }, index) => (
            <Box as="article" key={index} width="large" elevation="small">
              <CardLink to={`/blog${node.fields.slug}`}>
                {node.frontmatter.cover !== null ? (
                  <Box height="small" >
                    <Img fluid={node.frontmatter.cover.childImageSharp.fluid} />
                  </Box>
                ) : (
                    <></>
                  )}
                <Box pad="medium">
                  <Box direction="row" justify="between" align="center">
                    <Heading level="4" margin={{ vertical: "xsmall" }}>{node.frontmatter.title}</Heading>
                    <Text as="span">{node.frontmatter.date}</Text>
                  </Box>
                  <Text>{node.timeToRead} min read</Text>
                  <Text>{node.frontmatter.description}</Text>
                </Box>
              </CardLink>
            </Box>
          ))}          
          <Pagination pageInfo={pageInfo} pathname={pathname} />
          <Subscribe />
        </Box>
      </>
    )
  }
}

export default Blog

export const query = graphql`
query blogListQuery ($skip: Int!, $limit: Int!) {
  site {
    siteMetadata {
      metaBlog {
        title
        description
        banner
      }
    }
  }
  allMarkdownRemark(
    filter: {fields: {slug: {ne: "/about-me/"}}}, 
    sort: {fields: [frontmatter___date], order: DESC}, 
    limit: $limit, 
    skip: $skip) {
    pageInfo {
      currentPage
      pageCount
      perPage
      hasPreviousPage
      hasNextPage
    }
    edges {
      node {
        timeToRead
        frontmatter {
          title
          description
          date (formatString: "dddd DD MMMM YYYY")
          cover {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
}
`
