import React from 'react';

import { Calculator } from '../components/calculator';
import { Hero } from '../components/hero';
import { HowItWork } from '../components/howitwork';
import { Layout } from '../components/layout';
import { Program } from '../components/program';
import { Reviews } from '../components/reviews';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Program" />
    <Hero />
    <Program id="programs" />
    <Calculator id="calculator" />
    <HowItWork />
    <Reviews id="reviews" />
  </Layout>
)

export default IndexPage
