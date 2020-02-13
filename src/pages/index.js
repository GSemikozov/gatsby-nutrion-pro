import React from 'react';
import ReactDOM from 'react-dom';

import { About } from '../components/about';
import { Calculator } from '../components/calculator';
import { FoodCarouselSection } from '../components/food';
import { Hero } from '../components/hero';
import { HowItWork } from '../components/howitwork';
import { Layout } from '../components/layout';
import { Program } from '../components/program';
import SEO from '../components/seo';
import icon1 from '../images/icons/cas.svg';
import icon2 from '../images/icons/check-mark.svg';
import icon3 from '../images/icons/Doprava.svg';
import icon4 from '../images/icons/jdlo.svg';
import icon5 from '../images/icons/misto-doruceni.svg';
import icon6 from '../images/icons/Odberne-misto.svg';
import icon7 from '../images/icons/suroviny.svg';
import icon8 from '../images/icons/vylucit-potraviny.svg';

const IndexPage = () => (
  <Layout>
    {/* <img src={icon1} />
    <img src={icon2} />
    <img src={icon3} />
    <img src={icon4} />
    <img src={icon5} />
    <img src={icon6} />
    <img src={icon7} />
    <img src={icon8} /> */}
    <SEO title="Home" />
    <Hero />
    <About />
    <Program />
    <Calculator id="calculator" />
    <FoodCarouselSection />
    <HowItWork />
  </Layout>
)

// ReactDOM.render(<App />, document.getElementById("root"))

export default IndexPage
