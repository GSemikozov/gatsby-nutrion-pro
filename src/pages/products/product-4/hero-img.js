import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

export const HeroImg = () => {
  const { mobile, desktop } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "hero-content-test-pack-img-lg.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobile: file(relativePath: { eq: "hero-content-test-pack-img-xs.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const sources = [
    mobile.childImageSharp.fluid,
    { ...desktop.childImageSharp.fluid, media: `(min-width: 768px)` },
  ]

  return <Img fluid={sources} />
}
