import React from 'react';

import { Hero3 } from '../components/hero3';
import { MenuOrderInfo } from '../components/menuOrderInfo';
import { HowItWork } from '../components/howitwork-v2'
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    {/* componetns here */}
    <Hero3 />
    <MenuOrderInfo />
    <HowItWork />
  </>
)

export default IndexPage
