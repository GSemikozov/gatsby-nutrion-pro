import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';

import { DeliverySection } from '../components/delivery';
import { DiscountSection } from '../components/discount';
import { FAQ2 } from '../components/faq2';
import { FoodCarouselSection2 } from '../components/food2';
import { Footer2 } from '../components/footer2';
import { Header2 } from '../components/header2';
import { Hero3 } from '../components/hero3';
import { HowItWork } from '../components/howitwork-v2';
import { MenuOrderInfo } from '../components/menuOrderInfo';
import { Order2 } from '../components/order-form2';
import { Program } from '../components/program-v2/';
import { Reviews2 } from '../components/reviews2';
import SEO from '../components/seo';

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
              section
            }
          }
        }
      }
    `
  )

  const [pageVersion, setPageVersion] = useState("")

  useEffect(() => {
    console.log("pageVersion", pageVersion)
    setPageVersion(localStorage.getItem("abTesting"))
  }, [])

  useEffect(() => {
    console.log("pageVersion", pageVersion)
  }, [pageVersion])

  return (
    <>
      {pageVersion && (
        <>
          {site && (
            <Header2 menuLinks={site.siteMetadata.menuLinks} isLight={true} />
          )}
          <SEO title="Home" />
          {/* componetns here */}
          <Hero3 />
          <MenuOrderInfo id="menu" />
          <Program />
          <Order2 id="calculator" />
          <FoodCarouselSection2 />
          <DeliverySection />
          <Reviews2 />
          <HowItWork />
          <DiscountSection />
          <FAQ2 />
          <Footer2 />
        </>
      )}
    </>
  )
}

export default IndexPage
