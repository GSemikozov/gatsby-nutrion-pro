import { Experiment, Variant } from '@marvelapp/react-ab-test';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';

import { About } from '../components/about';
import { DeliverySection } from '../components/delivery';
import { DiscountSection } from '../components/discount';
import { FAQ } from '../components/faq';
import { FAQ2 } from '../components/faq2';
import { FoodCarouselSection } from '../components/food';
import { FoodCarouselSection2 } from '../components/food2';
import { Footer } from '../components/footer';
import { Footer2 } from '../components/footer2';
import { Header } from '../components/header';
import { Header2 } from '../components/header2';
import { Hero } from '../components/hero2';
import { Hero3 } from '../components/hero3';
import { HowItWork } from '../components/howitwork';
import { HowItWork2 } from '../components/howitwork-v2';
import { MenuOrderInfo } from '../components/menuOrderInfo';
import { Order } from '../components/order-form';
import { Order2 } from '../components/order-form2';
import { PreFooter } from '../components/prefooter';
import { Program } from '../components/program';
import { Program2 } from '../components/program-v2/';
import { Reviews } from '../components/reviews';
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
    setPageVersion(localStorage.getItem("PUSHTELL-homepage"))
  }, [])

  useEffect(() => {
    console.log("push datalayer pageVersion", pageVersion)
    window.dataLayer &&
      window.dataLayer.push({
        event: "ga.pageview",
        testovani: pageVersion,
      })
  }, [pageVersion])

  return (
    <>
      <Experiment name="homepage">
        <Variant name="new-version">
          {site && (
            <Header2 menuLinks={site.siteMetadata.menuLinks} isLight={true} />
          )}
          <SEO title="Home" />
          {/* componetns here */}
          <Hero3 />
          <MenuOrderInfo id="menu" />
          <Program2 />
          <Order2 id="calculator" />
          <FoodCarouselSection2 />
          <DeliverySection />
          <Reviews2 />
          <HowItWork2 />
          <DiscountSection />
          <FAQ2 />
          <Footer2 />
        </Variant>
        <Variant name="current-version">
          <SEO title="Home" />
          <Header menuLinks={site.siteMetadata.menuLinks} />
          <Hero />
          <Program id="programs" />
          <Order id="calculator" />
          <FoodCarouselSection />
          <About />
          <Reviews id="reviews" />
          <HowItWork />
          <FAQ id="faq" />
          <PreFooter />
          <Footer />
        </Variant>
      </Experiment>
    </>
  )
}

export default IndexPage
