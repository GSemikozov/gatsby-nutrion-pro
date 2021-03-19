import React from 'react';

import { Hero3 } from '../components/hero3';
import { MenuOrderInfo } from '../components/menuOrderInfo';
import { Program } from '../components/program-v2/'
import { Order2 } from '../components/order-form2';
import { HowItWork } from '../components/howitwork-v2';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    {/* componetns here */}
    <Hero3 />
    <MenuOrderInfo />
    <Program />
    <Order2 />
    <HowItWork />
  </>
)

export default IndexPage
