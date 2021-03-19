import React from 'react';

import { DeliverySection } from '../components/delivery';
import { DiscountSection } from '../components/discount';
import { FAQ2 } from '../components/faq2';
import { FoodCarouselSection2 } from '../components/food2';
import { Hero3 } from '../components/hero3';
import { HowItWork } from '../components/howitwork-v2';
import { MenuOrderInfo } from '../components/menuOrderInfo';
import { Order2 } from '../components/order-form2';
import { Program } from '../components/program-v2/';
import { Reviews2 } from '../components/reviews2';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    {/* componetns here */}
    <Hero3 />
    <MenuOrderInfo />
    <Program />
    <Order2 />
    <FoodCarouselSection2 />
    <DeliverySection />
    <Reviews2 />
    <HowItWork />
    <DiscountSection />
    <FAQ2 />
  </>
)

export default IndexPage
