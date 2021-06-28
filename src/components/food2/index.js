import './carousel.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import cx from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { useLangContext } from '../../utils/lang';
import { AnimatedWrapper } from '../animated-wrapper';
import { Button } from '../button';
import { Button2 } from '../button2';
import { Container } from '../container';
import { LocalizedLink } from '../localized-link';
import { FoodCard } from './food-card';
import styles from './food-carousel.module.css';
import carouselControlImg1 from './images/obed-image.png';

const FoodCardListItem = ({ text, title }) => (
  <li>
    <span className={styles.el}>{text}</span>
    <span className={styles.title}>{title}</span>
  </li>
)

const FoodCardList = ({ children }) => (
  <ul className={styles.foodCardList}>{children}</ul>
)

const FoodCarousel = () => {
  const { t } = useTranslation()

  const slidesData = [
    {
      img: "/images/food2.png",
      title: t("general.food.card1Title"),
      param1: "340",
      param2: "41g",
      param3: "30g",
      param4: "5g",
    },
    {
      img: "/images/food3.png",
      title: t("general.food.card2Title"),
      param1: "329",
      param2: "16g",
      param3: "31g",
      param4: "15g",
    },
    {
      img: "/images/food4.png",
      title: t("general.food.card3Title"),
      param1: "436",
      param2: "42g",
      param3: "31g",
      param4: "14g",
    },
    {
      img: "/images/food5.png",
      title: t("general.food.card4Title"),
      param1: "214",
      param2: "15g",
      param3: "14g",
      param4: "11g",
    },
    {
      img: "/images/food6.png",
      title: t("general.food.card5Title"),
      param1: "306",
      param2: "31g",
      param3: "29g",
      param4: "5g",
    },
    {
      img: "/images/food7.png",
      title: t("general.food.card6Title"),
      param1: "294",
      param2: "29g",
      param3: "24g",
      param4: "7g",
    },
    {
      img: "/images/food8.png",
      title: t("general.food.card7Title"),
      param1: "321",
      param2: "32g",
      param3: "27g",
      param4: "7g",
    },
    {
      img: "/images/food9.png",
      title: t("general.food.card8Title"),
      param1: "250",
      param2: "35g",
      param3: "28g",
      param4: "5g",
    },
    {
      img: "/images/food10.png",
      title: t("general.food.card9Title"),
      param1: "246",
      param2: "21g",
      param3: "14g",
      param4: "12g",
    },
    {
      img: "/images/food11.png",
      title: t("general.food.card10Title"),
      param1: "309",
      param2: "9g",
      param3: "29g",
      param4: "19g",
    },
    {
      img: "/images/food12.png",
      title: t("general.food.card11Title"),
      param1: "287",
      param2: "27g",
      param3: "27g",
      param4: "7g",
    },
    {
      img: "/images/food13.png",
      title: t("general.food.card12Title"),
      param1: "232",
      param2: "26g",
      param3: "18g",
      param4: "7g",
    },
    {
      img: "/images/food14.png",
      title: t("general.food.card13Title"),
      param1: "349",
      param2: "34g",
      param3: "23g",
      param4: "12g",
    },
    {
      img: "/images/food15.png",
      title: t("general.food.card14Title"),
      param1: "308",
      param2: "46g",
      param3: "12g",
      param4: "9g",
    },
    {
      img: "/images/food16.png",
      title: t("general.food.card15Title"),
      param1: "266",
      param2: "17g",
      param3: "14g",
      param4: "13g",
    },
  ]

  const slides = slidesData.map(item => (
    <div className={styles.carouselItem} key={item.title}>
      <FoodCard img={item.img} title={item.title}>
        <FoodCardList>
          <FoodCardListItem
            text={item.param1}
            title={t("general.food2.cardInfoLabel1")}
          />
          <FoodCardListItem
            text={item.param2}
            title={t("general.food2.cardInfoLabel2")}
          />
          <FoodCardListItem
            text={item.param3}
            title={t("general.food2.cardInfoLabel3")}
          />
          <FoodCardListItem
            text={item.param4}
            title={t("general.food2.cardInfoLabel4")}
          />
        </FoodCardList>
      </FoodCard>
    </div>
  ))

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    // appendDots: dots => {
    //   return (
    //     <div>
    //       <ul>
    //         {dots.map((item, index) => {
    //           return <li key={index}>this is {item.props.children}</li>
    //         })}
    //       </ul>
    //     </div>
    //   )
    // },
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          // dots: true,
        },
      },
    ],
  }
  return (
    slidesData !== null &&
    slidesData.length > 0 && (
      <div>
        <div className={styles.foodCarouselControls}>
          <div className={cx(styles.foodCarouselControl, styles.active)}>
            <img src={carouselControlImg1} alt="picture" />
            <span className={styles.text}>Text</span>
          </div>
          <div className={styles.foodCarouselControl}>
            <img src={carouselControlImg1} alt="picture" />
            <span className={styles.text}>Text</span>
          </div>
          <div className={styles.foodCarouselControl}>
            <img src={carouselControlImg1} alt="picture" />
            <span className={styles.text}>Text</span>
          </div>
          <div className={styles.foodCarouselControl}>
            <img src={carouselControlImg1} alt="picture" />
            <span className={styles.text}>Text</span>
          </div>
          <div className={styles.foodCarouselControl}>
            <img src={carouselControlImg1} alt="picture" />
            <span className={styles.text}>Text</span>
          </div>
        </div>
        <Slider {...settings}>{slides}</Slider>
      </div>
    )
  )
}

export const FoodCarouselSection2 = () => {
  const { t } = useTranslation()
  const { lang } = useLangContext()

  return (
    <section className={styles.foodCarouselSection} id="food">
      <Container isWide={true}>
        {/* <AnimatedWrapper> */}
        <h3 className="fancyUnderlineText sectionTitleNew text-center">
          <Trans i18nKey="home.food.title">
            <span>Jaká jídla</span> tě s námi čekají?
          </Trans>
        </h3>
        <FoodCarousel />
        <div
          className={cx("text-center", { ["hide"]: lang !== "cz" })}
          style={{ marginTop: "40px" }}
        >
          <Button2 color="secondary" size="lg" className={styles.outsideButton}>
            <LocalizedLink
              to="/ukazka-menu"
              style={{
                padding: "14px 20px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {t("general.food.CTA")}
            </LocalizedLink>
          </Button2>
        </div>
        {/* </AnimatedWrapper> */}
      </Container>
    </section>
  )
}
