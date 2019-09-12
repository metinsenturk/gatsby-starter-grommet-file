import React from 'react'
import { Heading, Box, Anchor, Image, Text, Stack, Paragraph } from 'grommet'
import { InternalLink } from '../components/internal/internal'

import SEO from '../components/seo/seo';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const { indexText } = data.site.siteMetadata;

  return (
    <>
      <SEO />
      <Box elevation="small" overflow="hidden" >
        <Stack>
          <Box><Image fit="cover" src={`//source.unsplash.com/${indexText.picture}`} alt="Unsplash Image" /></Box>
          <Box pad="large" justify="between" fill="vertical">
            <Box>
              {indexText.enabled ? (<Box>
              <Heading level="1">{ indexText.title }</Heading>
              <Paragraph size="large"> {indexText.description} Find out about my <InternalLink to="/blog/"><Anchor as="span" label="blog"/></InternalLink> and <InternalLink to="/album/"><Anchor as="span" label="photographs"/></InternalLink>.
            </Paragraph></Box>) : (<></>)}
            </Box>
            <Box>
              <Text size="xsmall">Courtesy of Unsplash.</Text>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

export default IndexPage;

export const query = graphql`
query {
  site {
    siteMetadata {
      indexText {
        title
        description
        enabled
        picture
      }
    }
  }
}
`