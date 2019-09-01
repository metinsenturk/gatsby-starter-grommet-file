import React from 'react'
import { Box, Heading, Text, Image, Stack, Button } from 'grommet'
import { graphql } from 'gatsby';
// import notFoundImg from '../assets/gatsby-astronaut.png'

const NotFoundPage = () => {
  return (
    <Box elevation="small" fill={true}>
      <Stack>
        <Box height="large"></Box>
        <Box direction="row" justify="end" fill={false} pad="large" >
          <Image src="//www.google.com/images/errors/robot.png" alt="Google Error Robot" />
        </Box>
        <Box pad="large">
          <Heading level="1" size="large" >Not Found!</Heading>
          <Text size="large" weight="bold">You just hit a route that doesn&#39;t exist... the sadness.</Text>
          <Box pad={{ vertical: 'medium' }} direction="row" justify="start">
            <Button label="Back to Home" href="/" primary={true}></Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default NotFoundPage;

export const query = graphql`
query {
  site {
    siteMetadata {
      siteUrl
    }
  }
}
`
