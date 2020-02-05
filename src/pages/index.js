import React from 'react';

import { About } from '../components/about';
import { Calculator } from '../components/calculator';
import { Hero } from '../components/hero';
import { Layout } from '../components/layout';
import { Program } from '../components/program';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Program />
    <Calculator />
  </Layout>
)

export default IndexPage
