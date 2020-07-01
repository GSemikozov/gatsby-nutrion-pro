import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

export const HeroImg = () => {
  const { mobile, desktop } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "vc-desktop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobile: file(relativePath: { eq: "vc-mobile.jpg" }) {
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
