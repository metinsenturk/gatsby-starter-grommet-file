import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Box, Heading, Text } from 'grommet'
import SEO from '../components/seo/seo';
import PhotoGrid from '../components/photo-grid/photo-grid'
import { CardLink } from '../components/internal/internal'
import Pagination from '../components/pagination/pagination';
// TODO: check this library again.
// eslint-disable-next-line
import ReactPhotoGrid from 'react-photo-grid'

export default class Album extends Component {
    render() {
        const meta = this.props.data.site.siteMetadata.metaAlbum
        const images = this.props.data.images.edges
        const albums = this.props.data.albums.edges
        const pageInfo = this.props.data.albums.pageInfo
        const pathname = "/album/"

        return (
            <>
                <SEO
                    pathname={pathname}
                    title={meta.title}
                    desc={meta.description}
                />
                <Box gap="medium" align="center">
                    {albums.map((album, index) => {
                        const album_images = images.filter(image => album.node.slug.replace(/[/]/g, '') === image.node.relativeDirectory
                        )
                        return (
                            <Box key={index} width="large" elevation="small">
                                <CardLink key={index} to={`/album${album.node.slug}`}>
                                    <PhotoGrid imagesList={album_images} />
                                    <Box pad="medium">
                                        <Box direction="row" justify="between" align="center">
                                            <Heading level="3" margin={{ vertical: "small" }}>{album.node.title}</Heading>
                                            <Text>{album.node.created}</Text>
                                        </Box>
                                        <Text>{album.node.description}</Text>
                                    </Box>
                                </CardLink>
                            </Box>
                        )
                    })}
                    <Pagination pageInfo={pageInfo} pathname={pathname} />
                </Box>
            </>
        )
    }
}

export const query = graphql`
query albumListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        metaAlbum {
          title
          description
          banner
        }
      }
    }
    albums: allAlbumsJson(sort: {fields: [created], order: DESC}, limit: $limit, skip: $skip) {
      pageInfo {
        currentPage
        pageCount
        perPage
        hasPreviousPage
        hasNextPage
      }
      edges {
        node {
          title
          description
          slug
          created (formatString: "dddd DD MMMM YYYY")
        }
      }
    }
    images: allFile(filter: {extension: {regex: "/(png|jpeg|jpg)/"}, sourceInstanceName: {eq: "album"}}) {
      edges {
        node {
          relativePath
          relativeDirectory
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }  
`
