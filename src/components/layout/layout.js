import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Grommet, ResponsiveContext, Box } from 'grommet'
import { base, dark, grommet } from 'grommet/themes';
import { deepMerge } from "grommet/utils";
import { createGlobalStyle } from 'styled-components'

import Header from '../header/header'
import Profile from '../profile/profile'
import Footer from '../footer/footer'

const GlobalSyle = createGlobalStyle`
  body {
    margin: 0
  }
`
const grommetEdit = deepMerge(grommet, {
  paragraph: {
    medium: {
      maxWidth: "auto"
    }
  }
});

const darkEdit = deepMerge(dark, {
  paragraph: {
    medium: {
      maxWidth: "auto"
    }
  }
});

const GrommetThemes = {
  grommet: grommetEdit,
  base,
  dark: darkEdit,
};

// eslint-disable-next-line 
const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '24px',
      height: '20px',
    }
  },
};

class Layout extends React.Component {
  constructor(props) {
    super(props);
    let theme = (new Date().getHours() < 19);
    this.state = { theme: theme };
  }

  onThemeChange = () => {
    this.setState(prevState => ({ theme: !prevState.theme }))
  }

  render() {
    return (
      <StaticQuery
        query={query}
        render={(data) => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              htmlAttributes={{ lang: data.site.siteMetadata.siteLanguage }}            
            />
            <Grommet theme={this.state.theme ? GrommetThemes.grommet : GrommetThemes.dark} full={true}>
              <GlobalSyle />
              <Header headercolor={data.site.siteMetadata.headerColor} theme={{ status: this.state.theme, onClick: this.onThemeChange }} />
              <ResponsiveContext.Consumer>
                {(size) => {
                  if (size === 'small' || size === 'xsmall')
                    return (
                      <Box
                        pad="medium"
                        gap="small"
                      >
                        <Box as="main">
                          {this.props.children}
                        </Box>
                        <Footer />
                      </Box>
                    )
                  else
                    return (
                      <Box
                        direction="row"
                        pad="medium"
                        gap="small"
                        align="start"
                        alignSelf="center"
                        justify="center"
                      >
                        <Box as="main" basis="large" direction="row">
                          {this.props.children}
                        </Box>
                        <Box as="aside" basis="medium" gap="medium">
                          <Profile />
                          <Footer />
                        </Box>
                      </Box>
                    )
                }}
              </ResponsiveContext.Consumer>
            </Grommet>
          </>
        )}
      />
    )
  }
}

export {GrommetThemes}
export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

const query = graphql`
query SiteTitleQuery {
  site {
    siteMetadata {
      title
      siteLanguage
      headerColor
      metaDefault {
        title
        description
        banner
      }
    }
  }
}
`
