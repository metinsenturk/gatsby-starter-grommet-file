# Gatsby Starter Grommet lifE

Blogging is very easy with Gatsby. Start your blog with this template within just a few steps.

A demo of this starter is hosted in [here]().
## Features

- [React](https://reactjs.org)
- [Gatsby V2](https://www.gatsbyjs.org)
- [Grommet V2](https://v2.grommet.io/)
- A simple landing page, blog, and gallery pages.
- Pagination
- Multi theme support, light, dark, and more.
- SEO friendly design
    - JSON-LD for Google Breadcrumbs
    - JSON-LD for Google Article/ Websites
    - OpenGraph, Twitter, FB meta tags
- Google Analytics
- Robots.txt generation
- RSS Feed
- Manifest support
- Sitemap generation
- Offline Support
- Netlify form tags for site forms
- Social share buttons with `react-share`
- Own your content. Host your content in Markdown files.
- Images handled by `gatsby-image` for albums and markdown files.
- One config for all site.

## Getting Started & Configure

To start, first clone the repository, then edit the the siteMetadata in `gatsby.config.js`.

### Getting Started

To start building a blog with this template, you must first install the project using either `gatsby-cli` or `git`.

``` sh
# install with gatsby-cli
gatsby new grommet-filE https://www.gatsbyjs.org/docs/gatsby-cli/

# install with git
git clone https://www.gatsbyjs.org/docs/gatsby-cli/ grommet-filE

# shift to the new directory and install
cd grommet-filE
yarn install
```

### Development

For development, you can use [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/), depending on your choise. They both will launch `gatsby develop`. 

``` sh
yarn develop 
```

### Configure
``` sh
yarn build
```

### Configure

The main configuration of this site is handled by `gatsby-config.js` in `siteMetadata` object. You can control sections and general texts around the site without getting into the code. For example, to change the default theme

``` js
siteMetadata: {
    pathPrefix: '/',
    siteUrl: 'http://localhost:8000', 
    siteLanguage: 'en',
    author: 'Metin Senturk',
    description: ``,
    title: "MS",
    metaDefault: {
      title: 'MS',
      description: '',
      banner: 'gatsby-icon.png',
    },
    metaBlog: {
      title: 'My Blog',
      description: '',
      banner: 'gatsby-icon.png',
    },
    metaAlbum: {
      title: 'Albums',
      description: '',
      banner: 'gatsby-icon.png',
    },
    titleAlt: '',
    headline: '',
    favicon: '', 
    shortName: '', 
    author: 'Metin Senturk', 
    themeColor: '#3D63AE',
    backgroundColor: '#EBEDF2',
    ogLanguage: 'en_US',
    social: {
      facebook: "MtnSntrk",
      twitter: "machinmetosh",
      linkedin: "metinsenturk",
      telegram: "metinsenturk",
      email: "metinsenturk@me.com",
      github: "metinsenturk"
    },
    sourceUrl: '',
    indexText: {
      enabled: true,
      picture: "random", 
      title: 'Hi There.',
      description: ''
    },
    headercolor: 'accent-4' 
  }
```

The following keys in the above object are used for following purposes.

- `metaDefault`: the content for site's general metatags.
- `metaBlog`: meta tags for /blog pages.
- `metaAlbum`: meta tags for /album pages
- `indexText`: to show the text on top of the image, switch `enabled` to `true`. `picture` is retrieved from Unsplash, you can implement your own, or use a static image from Gatsby's site images, I preferred the Unplash random api. Other options are `daily`, `weekly`.
- `headercolor`: The main/ light theme of the header color. Changing this will effect the reverse colors, and the colors of dark theme as well. Full color options are available at Grommet's [site](https://v2.grommet.io/components#Color).
- `social`: The social usernames. This will be used in social links and share buttons. No need to use @, #, etc.

## Author

by [@metinsenturk]().