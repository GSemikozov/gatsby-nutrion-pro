import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';

export const BackgroundPostHeroSection = ({ children, className }) => {
  const { mobile, desktop } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "product-food-bg-desktop.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobile: file(relativePath: { eq: "product-food-bg-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const sources = [
    mobile.childImageSharp.fluid,
    {
      ...desktop.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <BackgroundImage className={className} fluid={sources}>
      {children}
    </BackgroundImage>
  )
}
