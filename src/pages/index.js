import React from 'react';

import { Hero3 } from '../components/hero3';
import { HowItWork } from '../components/howitwork-v2';
import { MenuOrderInfo } from '../components/menuOrderInfo';
import { Order2 } from '../components/order-form2';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    {/* componetns here */}
    <Hero3 />
    <MenuOrderInfo />
    <Order2 />
    <HowItWork />
  </>
)

export default IndexPage
