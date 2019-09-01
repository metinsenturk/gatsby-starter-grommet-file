import React from 'react'
import { StaticQuery, graphql, } from 'gatsby'
import { Box, Heading, Text, Markdown, Anchor, Image } from 'grommet'
import { InternalLink } from '../internal/internal'
import Social from '../social/social'
import profilePic from '../../assets/me.jpg'

const Profie = (props) => (
    <StaticQuery
        query={query}
        render={
            ({ site }) => {
                const { author, description } = site.siteMetadata
                return (
                    <Box>
                        <Box direction="row-responsive">
                            <Box
                                width="small"
                                height="small"
                                overflow="hidden"
                                responsive={false}
                                //elevation="xsmall"          
                                margin={{ bottom: 'small', top: 'none', left: 'none', right: 'small' }}
                            >
                                <Image
                                    alt="personal picture."
                                    src={props.profile.src ? props.profile.src : profilePic}
                                    fit="cover"
                                />
                            </Box>
                            <Box>
                                <Heading level="3" margin="0">{author}</Heading>
                            </Box>

                        </Box>
                        <Box>
                            <Social />
                            <Heading level="4" margin="0">About Me</Heading>
                            <Markdown>{description}</Markdown>
                            <Text>Read more about <InternalLink to="/about/"><Anchor as="span">me.</Anchor></InternalLink>
                            </Text>
                        </Box>
                    </Box>
                )
            }
        }
    />
)

export default Profie;

Profie.defaultProps = {
    profile: {
        alt: "placeholder profile pic",
        src: "//via.placeholder.com/150",
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    }
}

const query = graphql`
query {
    site {
      siteMetadata {
        author
        description
      }
    }
  }
  
`