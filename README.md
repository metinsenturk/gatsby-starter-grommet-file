# Gatsby Starter Grommet File :pushpin::closed_book::grapes:

<!-- Markdown snippet -->
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/metinsenturk/gatsby-starter-grommet-file)

Blogging is very easy with GatsbyJs. Start your blog with this template within just a few steps.

A demo of this starter is hosted in [here](https://grommet-file.netlify.com/).

<p align="center">
  <img src="./content/readme/index-page.gif" alt="Index page of Grommet File.">
</p>

## Features

- [React](https://reactjs.org)
- [Gatsby V2](https://www.gatsbyjs.org)
- [Grommet V2](https://v2.grommet.io/)
- A simple landing page, blog, and gallery pages.
- Pagination
- Multi theme support, light, **dark**, and more.
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
- Google recaptcha v2 for forms
- Social share buttons with `react-share`
- Own your content. Host your content in Markdown files.
- Images handled by `gatsby-image` for albums and markdown files.
- One config for all site.
- Markdown files for your content.

## Getting Started & Configure

To start with, first clone the repository, then edit the the siteMetadata in `gatsby.config.js`.

### Getting Started

To start building a blog with this template, you must first install the project using either `gatsby-cli` or `git`.

``` sh
# install with gatsby-cli
gatsby new grommet-file https://github.com/metinsenturk/gatsby-starter-grommet-file

# install with git
git clone https://github.com/metinsenturk/gatsby-starter-grommet-file grommet-file

```

After downloading files. You should install the project `yarn`.
``` sh
# shift to the new directory
cd grommet-file

# install
yarn install
```
Create `env.*` files and add your google recaptcha sitekey.

``` sh
echo GATSBY_RECAPTCHA_KEY=$GATSBY_RECAPTCHA_KEY >> .env.development
```

### Development

For development, you can use [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/), depending on your choise. They both will launch `gatsby develop`. 

``` sh
yarn develop 
```

### Publish

I use Netlify for publishing. Netlify pulls the source and builds the source with `gatsby build`. If you have your own hosting service or planing to use somewhere else, you can get the built version of the files with following command.

``` sh
yarn build
```

#### A note on Netlify Publish

I use .env file for custom recaptcha. While developing, your local `.env.*` file will be used to read and the key `GATSBY_RECAPTCHA_KEY`. However, when deploying on Netlify, you need to create an environment variable and configure your build accordingly. In your site settings, you need to do the following.

1. You should create an `Environment Variable` with your site-key. For example, `GATSBY_RECAPTCHA_KEY` and set it's value to your key.
2. The `Build Command` in Netlify should be as following.

``` sh
echo GATSBY_RECAPTCHA_KEY=$GATSBY_RECAPTCHA_KEY >> .env.production && gatsby build
```
### Configure

The main configuration of this site is handled by `gatsby-config.js` in `siteMetadata` object. You can control sections and general texts around the site without getting into the code. For example, to change the default theme

``` js
siteMetadata: {
    pathPrefix: '/',
    siteUrl: 'https://grommet-file.netlify.com/', 
    sourceUrl: 'https://github.com/metinsenturk/gatsby-starter-grommet-file',
    siteLanguage: 'en',
    author: 'Metin Senturk',
    description: `Awesome gatsby starter with Grommet V2 and more!`,
    title: "MS",
    titleAlt: '',
    headline: '',
    favicon: '', 
    shortName: '', 
    author: 'Metin Senturk', 
    themeColor: '#3D63AE',
    headercolor: 'accent-4' 
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
    indexText: {
      enabled: true,
      picture: "random", 
      title: 'Hi There.',
      description: ''
    },
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
  }
```

The following keys in the above object are used for following purposes.

- `metaDefault`: the content for site's general metatags.
- `metaBlog`: meta tags for /blog pages.
- `metaAlbum`: meta tags for /album pages
- `indexText`: to show the text on top of the image, switch `enabled` to `true`. `picture` is retrieved from Unsplash, you can implement your own, or use a static image from Gatsby's site images, I preferred the Unplash random api. Other options are `daily`, `weekly`.
- `headercolor`: The main/ light theme of the header color. Changing this will effect the reverse colors, and the colors of dark theme as well. Full color options are available at Grommet's [site](https://v2.grommet.io/components#Color).
- `social`: The social usernames. This will be used in social links and share buttons. No need to use @, #, etc.

## Contribution and Issues

Please open up an issue follow general contribution guidelines to contibute. Contact with me at anytime!

## Thank You!

Thank all of these people for their open source content and their efforts!

[@saracmert](https://github.com/saracmert):star:, [@Ganevru](https://github.com/Ganevru), [@Netlify Community](https://community.netlify.com/), [@Grommet](https://github.com/grommet) and all others in WWW.

## Author

by [@metinsenturk](https://github.com/metinsenturk).