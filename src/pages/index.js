import React from 'react';

import { About } from '../components/about';
import { Calculator2 } from '../components/calculator2';
import { FAQ } from '../components/faq';
import { FoodCarouselSection } from '../components/food';
import { Hero } from '../components/hero';
import { HowItWork } from '../components/howitwork';
import { Layout } from '../components/layout';
import { PreFooter } from '../components/prefooter';
import { Program } from '../components/program';
import { Reviews } from '../components/reviews';
import SEO from '../components/seo';
import { TryFood } from '../components/tryfood';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Program id="programs" />
    <Calculator2 id="calculator" />
    <FoodCarouselSection />
    <HowItWork />
    <TryFood id="try-food" />
    <Reviews id="reviews" />
    <FAQ id="faq" />
    <PreFooter />
  </Layout>
)

// ReactDOM.render(<App />, document.getElementById("root"))

export default IndexPage
