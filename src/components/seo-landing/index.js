/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import useSiteMetadata from '../../hooks/useSiteMetadata';

function SEOLanding({ lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription =
    "Imunita pro tebe, imunita pro ně. S každou objednávkou věnujeme 10 jídel zdravotníkům, kteří potřebují posílit imunitu nejvíce. Pomáhej s námi." ||
    site.siteMetadata.description

  const { siteURL } = useSiteMetadata()

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title="Daruj jídlo zdravotníkům i ty!"
      titleTemplate={`NutritionPro - ${site.siteMetadata.title}`}
      image={`${siteURL}/images/fb-cover.png`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `${siteURL}/images/fb-cover.png`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `${siteURL}/munita`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEOLanding.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEOLanding.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEOLanding
