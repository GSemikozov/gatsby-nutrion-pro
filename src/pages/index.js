import React from 'react';

import { About } from '../components/about';
import { Hero } from '../components/hero';
import { Layout } from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
