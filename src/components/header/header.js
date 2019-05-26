import React from 'react'
import { Box, Heading, Anchor, ResponsiveContext, Text, Button, Layer } from 'grommet'
import { Actions, Action, Apps } from 'grommet-icons';
import { InternalLink } from '../internal/internal'

const HEADERCOLOR = 'neutral-3'

const ITEMS = [
  {
    active: true,
    label: "Home",
    path: "/"
  },
  {
    active: true,
    label: "About",
    path: "/about/"
  },
  {
    active: true,
    label: "Blog",
    path: "/blog/"
  },
  {
    active: false,
    label: "Gallery",
    path: "/album/"
  },
  {
    active: false,
    label: "Contact",
    path: "/contact/"
  },
]

const Settings = (props) => {

  return (
    <ResponsiveContext.Consumer>
      {size => {
        if (size !== "xsmall" && size !== "small")
          return (
            <Box border={{ side: "left" }} margin={{ left: "medium" }} pad={{ left: "medium" }}>
              <Button onClick={props.theme.onClick}>
                <Box>
                  {props.theme.status ? <Action size="medium" /> : <Actions size="medium" />}
                </Box>
              </Button>
            </Box>
          )
        else
          return (
            <Box border={{ side: "top" }} margin={{ top: "large" }} pad={{ top: "large" }}>
              <Button onClick={props.theme.onClick}>
                <Box>
                  {props.theme.status ? <Anchor size="large" icon={<Action />} label="Darken" /> : <Anchor size="large" icon={<Actions />} label="Lighthen" />}
                </Box>
              </Button>
            </Box>
          )
      }}
    </ResponsiveContext.Consumer>
  );
}

const MobileHeader = (props) => {
  return (
    <Layer position="top" full="vertical" modal={true} plain={true}>
      <Box background={HEADERCOLOR} fill="vertical" align="center" gap="large" pad="large">
        <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
          <Heading size='large'>Menu</Heading>
        </Box>
        {ITEMS.map((item, index) => (
          <InternalLink key={index} to={item.path} onClick={props.navOnClick}>
            <Anchor as="span">
              <Box pad={{ horizontal: 'medium', vertical: 'large' }}>
                <Text size='large'>{item.label}</Text>
              </Box>
            </Anchor>
          </InternalLink>
        ))}
        <Settings theme={props.theme} />

      </Box>
    </Layer>
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mobileMenu: false, headertheme: this.props.headercolor ? this.props.headercolor : HEADERCOLOR };
  }

  mobileOnClick = () => {
    this.setState(prevState => ({ mobileMenu: !prevState.mobileMenu }))
  }

  render() {
    const theme = this.props.theme
    return (
      <Box
        as="header"
        direction="row"
        background={this.state.headertheme}
        gap="medium"
        align="center"
        justify="around"
      >
        <InternalLink to="/" >
          <Anchor as="span" style={{ textDecoration: 'none', boxShadow: 'none' }}>
            <Heading level="2"> MS</Heading>
          </Anchor>
        </InternalLink>

        <ResponsiveContext.Consumer>
          {size => {
            if (size !== "xsmall" && size !== "small") {
              return (
                <Box direction="row">
                  <Box as="nav" gap="medium" direction="row" align="center">
                    {ITEMS.map((item, index) => (
                      <InternalLink key={index} to={item.path}>
                        <Anchor as="span" label={item.label} />
                      </InternalLink>
                    ))}
                  </Box>
                  <Settings theme={{ status: theme.status, onClick: theme.onClick }} />
                </Box>
              )
            } else {
              return (
                <Box>
                  {this.state.mobileMenu ? (
                    <MobileHeader navOnClick={this.mobileOnClick} theme={theme} />
                  ) : (
                      <Button onClick={this.mobileOnClick} icon={<Apps />} />
                    )}
                </Box>)
            }
          }}
        </ResponsiveContext.Consumer>
      </Box>
    )
  }
}

export default Header
