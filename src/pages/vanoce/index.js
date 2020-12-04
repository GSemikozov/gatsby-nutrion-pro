import cx from 'classnames';
import React from 'react';

import { Button } from '../../components/button';
import { Container } from '../../components/container';
import { FoodCarouselSection } from '../../components/food';
import { HeroNY } from '../../components/hero-ny';
import { Hero } from '../../components/hero2';
import productImg3 from '../../images/product-3-bg.jpg';
import section4Styles from '../../pages/imunita/section4.module.css';
import heroStyles from '../../templates/hero.module.css';
import styles from '../products/product4.module.css';
import { ContentDesktopImg } from './content-img-desktop';
import pageStyles from './ny-program.module.css';

const NYProgramPage = () => {
  return (
    <>
      <HeroNY />

      <section className={section4Styles.section}>
        <Container>
          <div className={pageStyles.blockWrap}>
            <div className={cx(pageStyles.col, pageStyles.firstCol)}>
              <h3 className={pageStyles.title}>
                Udělejte radost svým nejbližším
              </h3>
              <p className={pageStyles.info}>
                Vánoční voucher od NutritionPro je dárek, který ocení úplně
                každý.
              </p>
              <Button type="secondary">
                <span style={{ width: "100px" }}>Mám zájem</span>
              </Button>
            </div>
            <div className={pageStyles.col}>
              <ContentDesktopImg />
            </div>
          </div>
        </Container>
      </section>

      <FoodCarouselSection />
    </>
  )
}

export default NYProgramPage
