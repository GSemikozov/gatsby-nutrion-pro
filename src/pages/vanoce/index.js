import cx from 'classnames';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../../components/button';
import stylesCalc from '../../components/calculator/calculator.module.css';
import { Container } from '../../components/container';
import { FoodCarouselSection } from '../../components/food';
import { MainForm } from '../../components/forms/main-form';
import { VoucherForm } from '../../components/forms/voucher-form';
import { HeroNY } from '../../components/hero-ny';
import { Hero } from '../../components/hero2';
import { ContentDesktopImg } from '../../components/venoce-img/content-img-desktop.js';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import productImg3 from '../../images/product-3-bg.jpg';
import section4Styles from '../../pages/imunita/section4.module.css';
import heroStyles from '../../templates/hero.module.css';
import styles from '../products/product4.module.css';
import pageStyles from './ny-program.module.css';

const NYProgramPage = () => {
  const { t } = useTranslation()
  const [form, setForm] = useState("calc")

  const scroll = useSmoothScroll()

  const onLinkClick = selector => () => {
    scroll.animateScroll(document.getElementById(selector))
  }

  return (
    <>
      <HeroNY />

      <section
        className={cx(stylesCalc.calculatorSection, pageStyles.calcSection)}
        id="calculator"
      >
        <Container>
          <h3 className={cx("sectionTitle", stylesCalc.title)}>
            {t("home.order.title")}
          </h3>
          {/* <div className={cx(stylesCalc.typeSelector)}>
            <Button
              name="submit"
              type="primary"
              size="md"
              className={cx(
                form === "calc"
                  ? stylesCalc.selectedButton
                  : stylesCalc.selectButton
              )}
              handleClick={() => setForm("calc")}
            >
              {t("home.order.tab1Btn")}
            </Button>
            <Button
              name="submit"
              type="primary"
              size="md"
              className={cx(
                form === "voucher"
                  ? stylesCalc.selectedButton
                  : stylesCalc.selectButton
              )}
              handleClick={() => setForm("voucher")}
            >
              {t("home.order.tab2Btn")}
            </Button>
          </div> */}
          <VoucherForm />
          {/* {form === "calc" && <MainForm />}
          {form === "voucher" && <VoucherForm />} */}
        </Container>
      </section>

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
              <Button type="secondary" handleClick={onLinkClick("calculator")}>
                <span style={{ width: "100px" }}>Objednat voucher</span>
              </Button>
            </div>
            <div className={pageStyles.col}>
              <ContentDesktopImg className={pageStyles.img} />
            </div>
            <div className={pageStyles.mobContent}>
              <h3 className={cx("section-title", pageStyles.title)}>
                Udělejte radost svým nejbližším
              </h3>
              <ContentDesktopImg className={pageStyles.img} />
              <p className={pageStyles.info}>
                Vánoční voucher od NutritionPro je dárek, který ocení úplně
                každý.
              </p>
              <Button type="secondary" handleClick={onLinkClick("calculator")}>
                <span style={{ width: "100px" }}>Objednat voucher</span>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FoodCarouselSection />
    </>
  )
}

export default NYProgramPage
