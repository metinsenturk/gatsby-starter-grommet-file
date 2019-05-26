/* eslint-disable */
import React from 'react'
import { graphql, Link } from 'gatsby'
import Gallery from 'react-photo-gallery'
import { Box, Heading, Text, Anchor, ResponsiveContext } from "grommet"
import { Previous } from "grommet-icons"
import ShareVia from '../components/share/share'
import { InternalLink } from '../components/internal/internal'
import SEO from '../components/seo/seo';

export default ({ data, pageContext }) => {
  const {
    id,
    title,
    description,
    author,
    slug,
    created,
    updated,
  } = data.album
  const images = data.images.edges
  const { siteUrl, social } = data.site.siteMetadata
  const url = siteUrl + '/album/' + slug.split('/')[1] + '/'
  const pathname = "/album/"

  const photos = []
  images.map(({ node }, index) => photos.push({
    src: node.childImageSharp.fluid.src,
    key: index,
    width: 4,
    height: 3,
  }))

  return (
    <>
      <SEO
        article={false}
        pathname={pathname}
        title={title}
        desc={description}
        node={{
          url: url,
          title: title,
          created: created,
          updated: updated
        }} />
      <Box basis="large">
        <ResponsiveContext.Consumer>
          {(size) => {
            let pad = (size === 'small' || size === 'xsmall') ? "medium" : "xsmall"
            return (
              <Box pad={pad} justify="between" align="center" direction="row">
                <ShareVia url={url} title={title} excerpt={description} hashtags={['gatsby', 'sd']} via={social.twitter} />
                <InternalLink to='/album/'>
                  <Anchor as="span" icon={<Previous />} label="Back" />
                </InternalLink>
              </Box>
            )
          }}
        </ResponsiveContext.Consumer>

        {/** TODO: temp solution to show footer, article does not fit its contents on mobile. */}
        <Box as="article" elevation="xsmall" overflow="auto" pad={{ horizontal: "medium", vertical: "xsmall" }}>
          <Heading>{title}</Heading>
          <Text>{created}</Text>
          <Text>{author}</Text>
          <Text>{description}</Text>
          <Gallery photos={photos} direction="column" />
        </Box>
      </Box>
    </>
  )
}

export const query = graphql`
  query AlbumDatabySlug($slug: String!, $relativeDirectory: String!) {
    site {
      siteMetadata {
        siteUrl
        social {
          twitter
        }
      }
    }
    album: albumsJson(slug: { eq: $slug }) {
      id
      title
      description
      imagesPath
      author
      slug
      created
      updated
    }
    images: allFile(
      filter: {
        extension: { regex: "/(png|jpeg|jpg)/" }
        relativeDirectory: { eq: $relativeDirectory }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
