import React from 'react';

import { About } from '../components/about';
import { Calculator2 } from '../components/calculator2';
import { Order } from '../components/order-form';
import { FAQ } from '../components/faq';
import { FoodCarouselSection } from '../components/food';
import { Hero } from '../components/hero2';
import { HomeofficePackages } from '../components/homeoffice-packages';
import { HowItWork } from '../components/howitwork';
import { PreFooter } from '../components/prefooter';
import { Program } from '../components/program';
import { Reviews } from '../components/reviews';
import SEO from '../components/seo';
import { TryFood } from '../components/tryfood';

// import Layout from '../components/layout';
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Program id="programs" />
    {/* <HomeofficePackages /> */}
    {/* <Calculator2 id="calculator" /> */}
    <Order id="calculator" />
    <FoodCarouselSection />
    <About />
    {/* <TryFood id="try-food" /> */}
    <Reviews id="reviews" />
    <HowItWork />
    <FAQ id="faq" />
    <PreFooter />
  </>
)

// ReactDOM.render(<App />, document.getElementById("root"))

export default IndexPage
