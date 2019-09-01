import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import siteIcon from '../../assets/gatsby-icon.png'
import Twitter from './twitter'
import Facebook from './facebook'

const SEO = ({ title, desc, banner, pathname, article, node }) => (
  <StaticQuery
    query={query}
    render={
      ({ site }) => {
        // console.log(site);
        
        const {
          buildTime,
          siteMetadata: {
            siteUrl,
            metaDefault,
            headline,
            siteLanguage,
            ogLanguage,
            author,
            social
          },
        } = site

        const seo = {
          title: title || metaDefault.title,
          description: desc || metaDefault.description,
          image: `${siteUrl}${banner || siteIcon}`,
          url: `${siteUrl}${pathname || '/'}`,
        }

        // console.log(seo)

        // schema.org in JSONLD format
        // https://developers.google.com/search/docs/guides/intro-structured-data

        const schemaOrgWebPage = {
          '@context': 'http://schema.org',
          '@type': 'WebPage',
          url: siteUrl,
          headline,
          inLanguage: siteLanguage,
          mainEntityOfPage: siteUrl,
          description: metaDefault.description,
          name: metaDefault.title,
          author: {
            '@type': 'Person',
            name: author,
          },
          copyrightHolder: {
            '@type': 'Person',
            name: author,
          },
          copyrightYear: '2019',
          creator: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Person',
            name: author,
          },
          datePublished: '2019-01-18T10:30:00+01:00',
          dateModified: buildTime,
          image: {
            '@type': 'ImageObject',
            url: `${siteUrl}${siteIcon}`,
          },
        }

        // Initial breadcrumb list
        const itemListElement = [
          {
            '@type': 'ListItem',
            item: {
              '@id': siteUrl,
              name: 'Homepage',
            },
            position: 1,
          },
        ]

        // Page breadcrumb list
        if (pathname) {
          itemListElement.push({
            '@type': 'ListItem',
            item: {
              '@id': seo.url,
              name: seo.title,
            },
            position: 2,
          })
        }

        let schemaArticle = null

        if (article) {
          schemaArticle = {
            '@context': 'http://schema.org',
            '@type': 'Article',
            author: {
              '@type': 'Person',
              name: author,
            },
            copyrightHolder: {
              '@type': 'Person',
              name: author,
            },
            copyrightYear: '2019',
            creator: {
              '@type': 'Person',
              name: author,
            },
            publisher: {
              '@type': 'Organization',
              name: author,
              logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}${siteIcon}`,
              },
            },
            datePublished: node.created,
            dateModified: node.updated,
            description: seo.description,
            headline: seo.title,
            inLanguage: 'en',
            url: seo.url,
            name: seo.title,
            image: {
              '@type': 'ImageObject',
              url: seo.image,
            },
            mainEntityOfPage: seo.url,
          }

          // Push current blogpost into breadcrumb list
          itemListElement.push({
            '@type': 'ListItem',
            item: {
              '@id': node.url,
              name: node.title,
            },
            position: 3,
          })
        }

        const breadcrumb = {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          description: 'Breadcrumbs list',
          name: 'Breadcrumbs',
          itemListElement,
        }

        let schemaOrg = article ? schemaArticle : schemaOrgWebPage

        return (
          <>
            <Helmet>
              <html lang={siteLanguage} />
              <title>{seo.title}</title>
              <meta name="description" content={seo.description} />
              <meta name="image" content={seo.image} />
              <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
              <script type="application/ld+json">{JSON.stringify(breadcrumb, null, 4)}</script>
            </Helmet>
            <Facebook
              desc={seo.description}
              image={seo.image}
              title={seo.title}
              type={article ? 'article' : 'website'}
              url={seo.url}
              locale={ogLanguage}
              name={social.facebook}
            />
            <Twitter
              title={seo.title}
              image={seo.image}
              desc={seo.description}
              username={social.twitter}
            />
          </>
        )
      }
    } />
)

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  node: PropTypes.object,
}

SEO.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  article: false,
  node: null,
}

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        metaDefault {
          title
          description
          banner
        }
        headline
        siteLanguage
        ogLanguage
        author
        social {
          facebook
          twitter
        }
      }
    }
  }
`