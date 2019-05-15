import React from 'react'
import { Box, Text, Anchor } from 'grommet'
import { StaticQuery, graphql } from 'gatsby';

const Footer = () => (
    <StaticQuery
        query={query}
        render={
            ({ site }) => {
                let { author, sourceUrl } = site.siteMetadata;
                return (
                    <Box as="footer" pad={{ top: "small" }} border={{ size: "xsmall", side: "top" }}>
                        <Text size="small"> {author} {'\u00A9'} All rights reserved. Made with {'\u2665'}. Open sourced at <Anchor target="_blank" href={sourceUrl} label="here" />.</Text>
                    </Box>
                )
            }
        }
    />
)

export default Footer;

const query = graphql`
query {
    site {
      siteMetadata {
        author
        sourceUrl
      }
    }
  }
`