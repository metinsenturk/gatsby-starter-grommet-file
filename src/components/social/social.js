import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Box, Anchor } from 'grommet'
import { Facebook, Twitter, Linkedin, Github, Mail } from 'grommet-icons'

const Social = () => (
    <StaticQuery
        query={query}
        render={
            ({ site }) => {
                const { social } = site.siteMetadata
                return (
                    <Box gap="xsmall" pad={{ vertical: "small" }} direction="row-responsive">
                        <Anchor target="_blank" href={`//linkedin.com/in/${social.linkedin}`} icon={<Linkedin />} rel="noopener"/>
                        <Anchor target="_blank" href={`//facebook.com/${social.facebook}`} icon={<Facebook />} rel="noopener" />
                        <Anchor target="_blank" href={`//twitter.com/${social.twitter}`} icon={<Twitter />} rel="noopener"/>
                        <Anchor target="_blank" href={`//github.com/${social.github}`} icon={<Github />} rel="noopener"/>
                        <Anchor target="_blank" href={`mailto:${social.email}`} icon={<Mail />} rel="noopener"/>
                    </Box>
                )
            }
        }
    />
)

export default Social;

const query = graphql`
query {
    site {
      siteMetadata {        
        social {
          facebook
          twitter
          linkedin
          telegram
          email
          github
        }
      }
    }
  }
`