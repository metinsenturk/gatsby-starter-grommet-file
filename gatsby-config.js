module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    // basic
    // pathPrefix: '/',
    siteUrl: 'https://grommet-file.netlify.com/', 
    sourceUrl: 'https://github.com/metinsenturk/gatsby-starter-grommet-file',
    siteLanguage: 'en',
    author: 'Metin Senturk',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna 
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    title: "MS",
    // jsonld
    titleAlt: '',
    headline: '',
    favicon: '', 
    shortName: '', // shortname for manifest. MUST be shorter than 12 characters
    author: 'Metin Senturk', // Author for schemaORGJSONLD
    themeColor: '#3D63AE',
    headerColor: 'accent-4', // neutral-1, status-1, etc.
    backgroundColor: '#EBEDF2',
    
    // fb
    ogLanguage: 'en_US',
    
    // other
    social: {
      facebook: "mtnSntrk",
      twitter: "machinmetosh",
      linkedin: "metinsenturk",
      telegram: "@metinsenturk",
      email: "metinsenturk@me.com",
      github: "metinsenturk"
    },
    indexText: {
      enabled: true,
      picture: "random", // random, daily, weekly
      title: 'Hi There.',
      description: 'Cras nec lectus nulla. Morbi vel venenatis lorem, vitae faucibus mi. Vivamus est mi, faucibus ut nibh ut, pharetra volutpat risus. Quisque auctor mi eu semper aliquam. Maecenas pretium libero enim, eu suscipit massa sollicitudin ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
    metaDefault: {
      title: 'MS',
      description: 'My website with my amazing stuff.',
      banner: 'gatsby-icon.png',
    },
    metaBlog: {
      title: 'My Blog',
      description: 'The blog. This content is awesome and all about Gatsby & Grommet!',
      banner: 'gatsby-icon.png',
    },
    metaAlbum: {
      title: 'Albums',
      description: 'Lovely pictures. Professional grade! From DSLR to iPhone',
      banner: 'gatsby-icon.png',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `album`,
        path: `${__dirname}/content/album`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
              showCaptions: false,
              quality: 60,
              withWebp: true
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Grommet-File',
        short_name: `Metin's Personal Blog` ,
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/gatsby-icon.png', 
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'UA-58662671-7'
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: false,
          // Avoids sending pageview hits from custom paths
          //exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      }
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
  ],
}
