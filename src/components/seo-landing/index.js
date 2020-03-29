/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import useSiteMetadata from '../../hooks/useSiteMetadata';

function SEOLanding({ lang, meta }) {
  const metaDescription =
    "Imunita pro tebe, imunita pro ně. S každou objednávkou věnujeme 10 jídel zdravotníkům, kteří potřebují posílit imunitu nejvíce. Pomáhej s námi."
  const metaTitle = "Daruj jídlo zdravotníkům i ty!"

  const { siteURL } = useSiteMetadata()

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={metaTitle}
      description={metaDescription}
      image={`${siteURL}/images/fb-cover.png`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:app_id`,
          content: `814291069059301`,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `${siteURL}/images/nutritionpro_fb_banner.png`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `${siteURL}/imunita/`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "@nutritionprocz",
        },
        {
          name: `twitter:title`,
          content: metaTitle,
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
