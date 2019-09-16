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
                        <Text size="small"> Made with {'\u2665'} by {author}. {'\u00A9'} All rights reserved. The code is open sourced 
                            <Anchor target="_blank" rel="noopener" href={sourceUrl} label=" at Github" alt="Github source url"/>
                            .
                        </Text>
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
