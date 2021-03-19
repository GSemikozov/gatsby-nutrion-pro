import React from 'react';

import { DeliverySection } from '../components/delivery';
import { FoodCarouselSection2 } from '../components/food2';
import { Hero3 } from '../components/hero3';
import { HowItWork } from '../components/howitwork-v2';
import { MenuOrderInfo } from '../components/menuOrderInfo';
import { Order2 } from '../components/order-form2';
import { Program } from '../components/program-v2/';
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
    <FoodCarouselSection2 />
    <DeliverySection />
  </>
)

export default IndexPage
